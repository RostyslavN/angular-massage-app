import { Component, OnInit } from '@angular/core';
import { Parameters } from 'src/app/modules/shared/models/parameters.model';

import { IdService } from 'src/app/modules/shared/services/ids.service';
import { DoctorsService } from '../../services/doctors.service';

@Component({
  selector: 'app-disable-doctor',
  templateUrl: './disable-doctor.component.html',
  styleUrls: ['./disable-doctor.component.scss']
})
export class DisableDoctorComponent implements OnInit {
  private params: Parameters = { currentId: '' };

  constructor(private doctorsService: DoctorsService, private idService: IdService) { }

  ngOnInit(): void {
    this.idService.get(this.params);
    this.disableDoctor(this.params.currentId)
  }

  disableDoctor(id: string): void {
    this.doctorsService.disable(id)
      .then(() => console.log('Doctor was succesfully disabled'))
      .catch(error => console.error('Error disabling doctor: ', error));
  }
}
