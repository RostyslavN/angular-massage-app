import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';

import { CustomerProfileComponent } from './components/customer-profile/customer-profile.component';
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
        path: 'details',
        component: CustomerDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
