import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomerProfileComponent } from './components/customer-profile/customer-profile.component';
import { UpdateCustomerComponent } from './components/update-customer/update-customer.component';

const routes: Routes = [
  { path: ':id/user-profile', component: CustomerProfileComponent },
  { path: ':id/update-customer', component: UpdateCustomerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
