import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddDoctorComponent } from './components/add-doctor/add-doctor.component';
import { DisableDoctorComponent } from './components/disable-doctor/disable-doctor.component';
import { DoctorProfileComponent } from './components/doctor-profile/doctor-profile.component';
import { DoctorsListComponent } from './components/doctors-list/doctors-list.component';

const routes: Routes = [
  { path: 'add-doctor',  component: AddDoctorComponent},
  { path: ':id/disable-doctor',  component: DisableDoctorComponent },
  { path: ':id/doctor-profile',  component: DoctorProfileComponent},
  { path: 'doctors-list',  component: DoctorsListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorsRoutingModule { }
