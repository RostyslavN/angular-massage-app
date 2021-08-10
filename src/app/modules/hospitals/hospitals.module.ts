import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HospitalsRoutingModule } from './hospitals-routing.module';
import { DisableHospitalComponent } from './components/disable-hospital/disable-hospital.component';
import { AddHospitalComponent } from './components/add-hospital/add-hospital.component';


@NgModule({
  declarations: [
    DisableHospitalComponent,
    AddHospitalComponent
  ],
  imports: [
    CommonModule,
    HospitalsRoutingModule
  ]
})
export class HospitalsModule { }
