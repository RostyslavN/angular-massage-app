import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomerProfileComponent } from './components/customer-profile/customer-profile.component';
import { FindCustomerComponent } from './components/find-customer/find-customer.component';
import { UpdateCustomerComponent } from './components/update-customer/update-customer.component';

const routes: Routes = [
  {
    path: ':id',
    children: [
      {
        path: 'profile',
        component: CustomerProfileComponent
      },
      {
        path: 'update',
        component: UpdateCustomerComponent
      },
      {
        path: 'find',
        component: FindCustomerComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
