import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RemoveIllnessComponent } from './components/remove-illness/remove-illness.component';
import { UpdateIllnessComponent } from './components/update-illness/update-illness.component';
import { FindIllnessComponent } from './components/find-illness/find-illness.component';

const routes: Routes = [
  {
    path: ':id',
     children: [
       {
         path: 'remove',
         component: RemoveIllnessComponent
       },
       {
         path: 'update',
         component: UpdateIllnessComponent
       },
       {
         path: 'find',
         component: FindIllnessComponent
       }
     ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IllnessesRoutingModule { }
