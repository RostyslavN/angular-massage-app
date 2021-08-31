import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';

import { Customer } from '../../classes/customer.class';
import { CustomersService } from '../../services/customers.service';
import { CreateCustomerComponent } from '../create-customer/create-customer.component';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss']
})
export class CustomersListComponent implements OnInit {
  readonly customers$: Observable<Customer[]> = this.customersService.getAll();

  constructor(
    private customersService: CustomersService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openCreateCustomer(): void {
    const dialogRef: MatDialogRef<CreateCustomerComponent> = this.dialog.open(CreateCustomerComponent, {
      panelClass: 'modal-window',
      data: new Customer(),
      disableClose: true
    });
  }
}
