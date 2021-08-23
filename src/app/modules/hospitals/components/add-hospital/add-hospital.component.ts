import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { HospitalData } from '../../models/hospitalData.model';
import { HospitalsService } from '../../services/hospitals.service';

@Component({
  selector: 'app-add-hospital',
  templateUrl: './add-hospital.component.html',
  styleUrls: ['./add-hospital.component.scss']
})
export class AddHospitalComponent implements OnInit {
  hospitalForm: FormGroup;
  faTimesIcon: IconDefinition = faTimes;

  constructor(
    private hospitalsService: HospitalsService,
    private formBuilder: FormBuilder,
    private location: Location
  ) {
    this.hospitalForm =  this.formBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  addHospital(): void {
    if (this.hospitalForm.invalid) return;
    this.hospitalsService.add(Object.assign({ isActive: true }, this.hospitalForm.value))
      .then(docRef => console.log(`Hospital was succesfully added ${docRef.id}`))
      .catch(error => console.error('Error adding hospital: ', error));
  }

  closeModal(): void {
    this.location.back();
  }

  get name(): AbstractControl | null {
    return this.hospitalForm.get('name');
  }
  get address(): AbstractControl | null {
    return this.hospitalForm.get('address');
  }
}
