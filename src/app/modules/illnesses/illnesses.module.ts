import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IllnessesRoutingModule } from './illnesses-routing.module';
import { UpdateIllnessComponent } from './components/update-illness/update-illness.component';
import { IllnessDetailsComponent } from './components/illness-details/illness-details.component';
import { DeleteIllnessComponent } from './components/delete-illness/delete-illness.component';


@NgModule({
  declarations: [
    UpdateIllnessComponent,
    IllnessDetailsComponent,
    DeleteIllnessComponent
  ],
  imports: [
    CommonModule,
    IllnessesRoutingModule
  ]
})
export class IllnessesModule { }
