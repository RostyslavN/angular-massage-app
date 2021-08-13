import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Parameters } from 'src/app/modules/shared/models/parameters.model';
import { IdService } from 'src/app/modules/shared/services/ids.service';
import { CustomersService } from '../../services/customers.service';

@Component({
  selector: 'app-disable-customer',
  templateUrl: './disable-customer.component.html',
  styleUrls: ['./disable-customer.component.scss']
})
export class DisableCustomerComponent implements OnInit {
  private params: Parameters = { currentId: '' };

  constructor(private customersService: CustomersService, private idService: IdService) {}

  ngOnInit(): void {
    this.idService.get(this.params);
    this.disableCustomer(this.params.currentId);
  }

  async disableCustomer(id: string): Promise<void> {
    return this.customersService.disable(id)
      .then(() => console.log('Customer was succesfully disabled'))
      .catch(error => console.error('Error disabling customer: ', error));
  }
}
