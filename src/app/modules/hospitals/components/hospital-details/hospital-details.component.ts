import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';

import { Parameters } from 'src/app/modules/shared/models/parameters.model';
import { IdService } from 'src/app/modules/shared/services/ids.service';
import { HospitalData } from '../../models/hospitalData.model';
import { HospitalsService } from '../../services/hospitals.service';

@Component({
  selector: 'app-hospital-details',
  templateUrl: './hospital-details.component.html',
  styleUrls: ['./hospital-details.component.scss']
})
export class HospitalDetailsComponent implements OnInit {
  private params: Parameters = { currentId: '' };
  private hospitalDetails: HospitalData | undefined;

  constructor(private hospitalsService: HospitalsService, private idService: IdService) { }

  ngOnInit(): void {
    this.idService.get(this.params);
    this.getHospitalDetails(this.params.currentId);
  }

  getHospitalDetails(id: string): void {
    this.hospitalsService.getById(id).pipe(first()).subscribe({
      next: hospital => {
        this.hospitalDetails = hospital;
        console.log('Hospital details were successfully received');
      },
      error: err => console.error('Error receiving hospital details: ', err)
    });
  }
}
