import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddHospitalComponent } from './components/add-hospital/add-hospital.component';
import { DisableHospitalComponent } from './components/disable-hospital/disable-hospital.component';

const routes: Routes = [
  { path: 'register-hospital', component: AddHospitalComponent },
  { path: ':id/disable-hospital', component: DisableHospitalComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HospitalsRoutingModule { }
