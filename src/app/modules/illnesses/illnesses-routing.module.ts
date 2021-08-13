import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DeleteIllnessComponent } from './components/delete-illness/delete-illness.component';
import { IllnessDetailsComponent } from './components/illness-details/illness-details.component';
import { UpdateIllnessComponent } from './components/update-illness/update-illness.component';

const routes: Routes = [
  {
    path: ':id',
     children: [
       {
         path: 'delete',
         component: DeleteIllnessComponent
       },
       {
         path: 'update',
         component: UpdateIllnessComponent
       },
       {
         path: 'details',
         component: IllnessDetailsComponent
       }
     ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IllnessesRoutingModule { }
