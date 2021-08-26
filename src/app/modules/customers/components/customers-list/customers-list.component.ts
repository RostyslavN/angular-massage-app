import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Customer } from '../../models/customer.model';
import { CustomersService } from '../../services/customers.service';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss']
})
export class CustomersListComponent implements OnInit {
  readonly customers$: Observable<Customer[]> = this.customersService.getAll();

  constructor(private customersService: CustomersService) { }

  ngOnInit(): void {
  }

}
