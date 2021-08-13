import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';;

import { InitialServiceClass } from '../../shared/classes/initial-service.class';
import { Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomersService extends InitialServiceClass<Customer> {
  collectionName: string = 'customers';

  constructor(store: AngularFirestore) {
    super(store);
  }

  disable(id: string): Promise<void> {
    return this.collection.doc(id).update({'isClient': false});
  }
}
