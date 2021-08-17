import { Component, OnInit } from '@angular/core';

import { IdService } from 'src/app/modules/shared/services/ids.service';
import { Doctor } from '../../models/doctor.model';
import { DoctorsService } from '../../services/doctors.service';

@Component({
  selector: 'app-update-doctor',
  templateUrl: './update-doctor.component.html',
  styleUrls: ['./update-doctor.component.scss']
})
export class UpdateDoctorComponent implements OnInit {

  constructor(private doctorsService: DoctorsService, private idService: IdService) { }

  ngOnInit(): void {
  }

  updateDoctor(id: string, entity: Doctor): void {
    this.doctorsService.update(id, entity)
      .then(() => console.log('Doctor was succesfully updated'))
      .catch(error => console.error('Error updating doctor: ', error));
  }
}
