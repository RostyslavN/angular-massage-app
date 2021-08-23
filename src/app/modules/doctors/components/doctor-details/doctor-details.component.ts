import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';

import { Parameters } from 'src/app/modules/shared/models/parameters.model';
import { IdService } from 'src/app/modules/shared/services/ids.service';
import { Doctor } from '../../models/doctor.model';
import { DoctorsService } from '../../services/doctors.service';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.scss']
})
export class DoctorDetailsComponent implements OnInit {
  private params: Parameters = { currentId: '' };
  private doctorDetails : Doctor | undefined;

  constructor(private doctorsService: DoctorsService, private idService: IdService) { }

  ngOnInit(): void {
    this.idService.get(this.params);
    this.getDoctorDetails(this.params.currentId);
  }

  getDoctorDetails(id: string): void {
    this.doctorsService.getById(id).pipe(first()).subscribe({
      next: customer => {
        this.doctorDetails = customer;
        console.log('Doctor details were successfully received');
      },
      error: err => console.error('Error receiving customer details: ', err)
    });
  }
}
