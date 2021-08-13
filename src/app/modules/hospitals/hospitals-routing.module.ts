import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddHospitalComponent } from './components/add-hospital/add-hospital.component';
import { DisableHospitalComponent } from './components/disable-hospital/disable-hospital.component';
import { HospitalDetailsComponent } from './components/hospital-details/hospital-details.component';

const routes: Routes = [
  { path: 'register', component: AddHospitalComponent },
  {
    path: ':id',
    children: [
      {
        path: 'disable',
        component: DisableHospitalComponent
      },
      {
        path: 'details',
        component: HospitalDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HospitalsRoutingModule { }
