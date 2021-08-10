import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorsRoutingModule } from './doctors-routing.module';
import { AddDoctorComponent } from './components/add-doctor/add-doctor.component';
import { DoctorProfileComponent } from './components/doctor-profile/doctor-profile.component';
import { DoctorsListComponent } from './components/doctors-list/doctors-list.component';
import { DisableDoctorComponent } from './components/disable-doctor/disable-doctor.component';
import { UpdateDoctorComponent } from './components/update-doctor/update-doctor.component';
import { DoctorsFormComponent } from './components/doctors-form/doctors-form.component';


@NgModule({
  declarations: [
    AddDoctorComponent,
    DoctorProfileComponent,
    DoctorsListComponent,
    DisableDoctorComponent,
    UpdateDoctorComponent,
    DoctorsFormComponent
  ],
  imports: [
    CommonModule,
    DoctorsRoutingModule
  ]
})
export class DoctorsModule {
  public availableTimes: Array<Date> = [];

}
