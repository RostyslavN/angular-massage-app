import { Component, OnInit } from '@angular/core';

import { Parameters } from 'src/app/modules/shared/models/parameters.model';
import { IdService } from 'src/app/modules/shared/services/ids.service';
import { Customer } from '../../classes/customer.class';
import { CustomersService } from '../../services/customers.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.scss']
})
export class UpdateCustomerComponent implements OnInit {
  private params: Parameters = { currentId: '' };

  constructor(private customersService: CustomersService, private idService: IdService) {}

  ngOnInit(): void {
    this.idService.get(this.params);
    // update
  }

  updateCustomer(id: string, entity: Customer): void {
    this.customersService.update(id, entity)
      .then(() => console.log('Customer was succesfully updated'))
      .catch(error => console.error('Error updating customer: ', error));
  }
}
