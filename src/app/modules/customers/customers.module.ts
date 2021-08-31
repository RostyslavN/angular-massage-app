import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerFormComponent } from './components/customer-form/customer-form.component';
import { DisableCustomerComponent } from './components/disable-customer/disable-customer.component';
import { UpdateCustomerComponent } from './components/update-customer/update-customer.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { CreateCustomerComponent } from './components/create-customer/create-customer.component';
import { CustomersListComponent } from './components/customers-list/customers-list.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';


@NgModule({
  declarations: [
    CustomerFormComponent,
    DisableCustomerComponent,
    UpdateCustomerComponent,
    CustomerDetailsComponent,
    CreateCustomerComponent,
    CustomersListComponent,
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    MatAutocompleteModule
  ]
})
export class CustomersModule { }
