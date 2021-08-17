import { Component, OnInit } from '@angular/core';

import { HospitalData } from '../../models/hospitalData.model';
import { HospitalsService } from '../../services/hospitals.service';

@Component({
  selector: 'app-add-hospital',
  templateUrl: './add-hospital.component.html',
  styleUrls: ['./add-hospital.component.scss']
})
export class AddHospitalComponent implements OnInit {

  constructor(private hospitalsService: HospitalsService) { }

  ngOnInit(): void {
  }

  addHospital(data: HospitalData): void {
    this.hospitalsService.add(data)
      .then(docRef => console.log(`Hospital was succesfully added ${docRef.id}`))
      .catch(error => console.error('Error adding hospital: ', error));
  }
}
