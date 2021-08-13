import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddDoctorComponent } from './components/add-doctor/add-doctor.component';
import { DisableDoctorComponent } from './components/disable-doctor/disable-doctor.component';
import { DoctorDetailsComponent } from './components/doctor-details/doctor-details.component';
import { DoctorProfileComponent } from './components/doctor-profile/doctor-profile.component';
import { DoctorsListComponent } from './components/doctors-list/doctors-list.component';

const routes: Routes = [
  { path: 'add',  component: AddDoctorComponent},
  { path: 'list',  component: DoctorsListComponent},
  {
    path: ':id',
    children: [
      {
        path: 'disable',
        component: DisableDoctorComponent
      },
      {
        path: 'profile',
        component: DoctorProfileComponent
      },
      {
        path: 'details',
        component: DoctorDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorsRoutingModule { }
