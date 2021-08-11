import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RemoveIllnessComponent } from './components/remove-illness/remove-illness.component';
import { UpdateIllnessComponent } from './components/update-illness/update-illness.component';

const routes: Routes = [
  { path: ':id/remove', component: RemoveIllnessComponent },
  { path: ':id/update', component: UpdateIllnessComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IllnessesRoutingModule { }
