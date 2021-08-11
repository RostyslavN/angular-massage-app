import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IllnessesRoutingModule } from './illnesses-routing.module';
import { RemoveIllnessComponent } from './components/remove-illness/remove-illness.component';
import { UpdateIllnessComponent } from './components/update-illness/update-illness.component';


@NgModule({
  declarations: [
    RemoveIllnessComponent,
    UpdateIllnessComponent
  ],
  imports: [
    CommonModule,
    IllnessesRoutingModule
  ]
})
export class IllnessesModule { }
