import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DoctorsRoutingModule } from './doctors-routing.module';
import { AddDoctorComponent } from './components/add-doctor/add-doctor.component';
import { DoctorProfileComponent } from './components/doctor-profile/doctor-profile.component';
import { DoctorsListComponent } from './components/doctors-list/doctors-list.component';
import { DisableDoctorComponent } from './components/disable-doctor/disable-doctor.component';
import { UpdateDoctorComponent } from './components/update-doctor/update-doctor.component';
import { DoctorsFormComponent } from './components/doctors-form/doctors-form.component';
import { DoctorDetailsComponent } from './components/doctor-details/doctor-details.component';


@NgModule({
  declarations: [
    AddDoctorComponent,
    DoctorProfileComponent,
    DoctorsListComponent,
    DisableDoctorComponent,
    UpdateDoctorComponent,
    DoctorsFormComponent,
    DoctorDetailsComponent
  ],
  imports: [
    CommonModule,
    DoctorsRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ]
})
export class DoctorsModule { }
