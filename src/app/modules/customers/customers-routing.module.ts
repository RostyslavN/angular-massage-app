import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateCustomerComponent } from './components/create-customer/create-customer.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { CustomersListComponent } from './components/customers-list/customers-list.component';
import { UpdateCustomerComponent } from './components/update-customer/update-customer.component';

const routes: Routes = [
  {
    path: 'create',
    component: CreateCustomerComponent
  },
  {
    path: 'list',
    component: CustomersListComponent
  },
  {
    path: ':id',
    children: [
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
