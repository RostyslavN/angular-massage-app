import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerProfileComponent } from './components/customer-profile/customer-profile.component';
import { CustomerFormComponent } from './components/customer-form/customer-form.component';
import { DisableCustomerComponent } from './components/disable-customer/disable-customer.component';
import { UpdateCustomerComponent } from './components/update-customer/update-customer.component';
import { FindCustomerComponent } from './components/find-customer/find-customer.component';


@NgModule({
  declarations: [
    CustomerProfileComponent,
    CustomerFormComponent,
    DisableCustomerComponent,
    UpdateCustomerComponent,
    FindCustomerComponent,
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule
  ]
})
export class CustomersModule { }
