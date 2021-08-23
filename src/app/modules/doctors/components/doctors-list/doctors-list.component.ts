import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';

import { Doctor } from '../../models/doctor.model';
import { DoctorsService } from '../../services/doctors.service';

@Component({
  selector: 'app-doctors-list',
  templateUrl: './doctors-list.component.html',
  styleUrls: ['./doctors-list.component.scss']
})
export class DoctorsListComponent implements OnInit {
  allDoctors: Doctor[] = [];

  constructor(private doctorsService: DoctorsService) { }

  ngOnInit(): void {
    this.getAllDoctors();
  }

  getAllDoctors(): void {
    this.doctorsService.getAll().pipe(first()).subscribe({
      next: (doctors: Doctor[]) => {
        this.allDoctors = doctors;
        console.log('Doctors list were successfully received');
      },
      error: err => console.error('Error receiving doctors list: ', err)
    });
  }
}
