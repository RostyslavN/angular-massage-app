import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { CustomersService } from '../../services/customers.service';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { MatDialogRef } from '@angular/material/dialog';
import { Customer } from '../../classes/customer.class';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss']
})
export class CreateCustomerComponent implements OnInit {
  constructor(
    private customerService: CustomersService,
    private dialogRef: MatDialogRef<CreateCustomerComponent>
  ) {

  }

  ngOnInit(): void {
  }

  createCustomer(customer: Customer): void {
    this.customerService.create(Object.assign({ isClient: true }, customer))
      .then(docRef => {
        console.log(`Customer was succesfully created ${docRef.id}`);
        this.dialogRef.close(true);
      })
      .catch(error => console.error('Error creating customer: ', error));
  }

}
