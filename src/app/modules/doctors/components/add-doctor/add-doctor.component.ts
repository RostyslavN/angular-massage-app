import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faTimes, IconDefinition } from '@fortawesome/free-solid-svg-icons';

import { DoctorsService } from '../../services/doctors.service';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.scss']
})
export class AddDoctorComponent implements OnInit {
  doctorForm: FormGroup;
  faTimesIcon: IconDefinition = faTimes;

  constructor(
    private doctorsService: DoctorsService,
    private formBuilder: FormBuilder,
  ) {
    this.doctorForm = this.formBuilder.group({
      fullName: ['', [Validators.required, Validators.minLength(6)]],
      age: ['', Validators.required],
      experience: this.formBuilder.group({
        months: ['', Validators.required],
        specilisation: ['', Validators.required]
      }),
      skills: ['', Validators.required],
      hospitalId: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  addDoctor(): void {
    if (this.doctorForm.invalid) return;
    this.doctorsService.add(Object.assign({ isEmployee: true }, this.doctorForm.value))
      .then(docRef => console.log(`Doctor was succesfully added ${docRef.id}`))
      .catch(error => console.error('Error adding doctor: ', error));
  }

  closeModal(): void {

  }

  get fullName(): AbstractControl | null {
    return this.doctorForm.get('fullName');
  }
  get age(): AbstractControl | null {
    return this.doctorForm.get('age');
  }
  get experienceMonths(): AbstractControl | null | undefined {
    return this.doctorForm.get('experience')?.get('months');
  }
  get experienceSpecilisation(): AbstractControl | null | undefined {
    return this.doctorForm.get('experience')?.get('specilisation');
  }
  get skills(): AbstractControl | null {
    return this.doctorForm.get('skills');
  }
  get hospitalId(): AbstractControl | null {
    return this.doctorForm.get('hospitalId');
  }
}
