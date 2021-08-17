import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Parameters } from 'src/app/modules/shared/models/parameters.model';
import { IdService } from 'src/app/modules/shared/services/ids.service';
import { Customer} from '../../models/customer.model';
import { CustomersService } from '../../services/customers.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {
  private params: Parameters = { currentId: '' };
  private customerDetails: Customer | undefined = {
    firstName: '',
    lastName: '',
    age: 30,
    illness: '',
    isClient: true,
    availableTime: [new Date()]
  };

  constructor(private customersService: CustomersService, private idService: IdService ) { }

  ngOnInit(): void {
    this.idService.get(this.params);
    this.getCustomerDetails(this.params.currentId);
  }

  getCustomerDetails(id: string): void{
    this.customersService.getById(id).subscribe({
      next: customer => {
        this.customerDetails = customer;
        console.log('Booking details were successfully received');
      },
      error: err => console.error('Error receiving customer details: ', err)
    });
  }
}