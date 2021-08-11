import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { CustomerProfile } from '../models/customerProfile';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  private collectionName: string = 'customers';

  constructor(private store: AngularFirestore) { }

  private collection(): AngularFirestoreCollection {
    return this.store.collection(this.collectionName);
  }

  getCustomers() {
    return this.collection().valueChanges({ idFiled: 'id' });
  }

  // getCustomerAvailableTime(id: string) {
  //   return this.collection().doc(id).get('availableTime');
  // }
  updateCustomer(id: string, newDate: CustomerProfile): void {
    this.collection().doc(id).update(newDate);
  }

  disableCustomer(id: string): void {
    this.collection().doc(id).update({'isClient': false});
  }
}
