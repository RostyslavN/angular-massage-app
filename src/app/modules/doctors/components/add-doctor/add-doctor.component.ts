import { Component, OnInit } from '@angular/core';

import { Doctor } from '../../models/doctor.model';
import { DoctorsService } from '../../services/doctors.service';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.scss']
})
export class AddDoctorComponent implements OnInit {

  constructor(private doctorsService: DoctorsService) { }

  ngOnInit(): void {
    // this.addDoctor( {} );
  }

  addDoctor(data: Doctor): void {
    this.doctorsService.add(data)
      .then(docRef => console.log(`Doctor was succesfully added ${docRef.id}`))
      .catch(error => console.error('Error adding doctor: ', error));
  }
}
