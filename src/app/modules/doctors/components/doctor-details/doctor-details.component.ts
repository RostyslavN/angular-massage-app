import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

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
  private doctorDetails : Doctor | undefined = {
    firstName: '',
    lastName: '',
    age: 30,
    education: '',
    experience: 5,
    isEmployee: true,
    availableTime: [new Date()]
  }

  constructor(private doctorsService: DoctorsService, private idService: IdService) { }

  ngOnInit(): void {
    this.idService.get(this.params);
    this.getDoctorDetails(this.params.currentId);
  }

  getDoctorDetails(id: string): Subscription {
    return this.doctorsService.getById(id).subscribe({
      next: customer => {
        this.doctorDetails = customer;
        console.log('Doctor details were successfully received');
      },
      error: err => console.error('Error receiving customer details: ', err)
    });
  }
}
