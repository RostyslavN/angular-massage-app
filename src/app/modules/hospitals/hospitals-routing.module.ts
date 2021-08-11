import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddHospitalComponent } from './components/add-hospital/add-hospital.component';
import { DisableHospitalComponent } from './components/disable-hospital/disable-hospital.component';
import { FindHospitalComponent } from './components/find-hospital/find-hospital.component';

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
        path: 'find',
        component: FindHospitalComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HospitalsRoutingModule { }
