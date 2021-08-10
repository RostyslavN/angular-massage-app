import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IllnessesRoutingModule } from './illnesses-routing.module';
import { RemoveIllnessComponent } from './components/remove-illness/remove-illness.component';


@NgModule({
  declarations: [
    RemoveIllnessComponent
  ],
  imports: [
    CommonModule,
    IllnessesRoutingModule
  ]
})
export class IllnessesModule { }
