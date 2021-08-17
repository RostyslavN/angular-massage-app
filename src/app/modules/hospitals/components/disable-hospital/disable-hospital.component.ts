import { Component, OnInit } from '@angular/core';

import { Parameters } from 'src/app/modules/shared/models/parameters.model';
import { IdService } from 'src/app/modules/shared/services/ids.service';
import { HospitalsService } from '../../services/hospitals.service';

@Component({
  selector: 'app-disable-hospital',
  templateUrl: './disable-hospital.component.html',
  styleUrls: ['./disable-hospital.component.scss']
})
export class DisableHospitalComponent implements OnInit {
  private params: Parameters = { currentId: '' };

  constructor(private hospitalsService: HospitalsService, private idService: IdService) { }

  ngOnInit(): void {
    this.idService.get(this.params);
    this.disableHospital(this.params.currentId);
  }

  disableHospital(id: string): void {
    this.hospitalsService.disable(id)
      .then(() => console.log('Hospital was succesfully disabled'))
      .catch(error => console.error('Error disabling hospital: ', error));
  }
}
