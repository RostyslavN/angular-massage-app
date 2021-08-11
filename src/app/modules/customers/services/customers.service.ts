import { Inject, Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { InitialServiceClass } from '../../shared/classes/initial-service.class';
import { CustomerProfile } from '../models/customerProfile.model';

@Injectable({
  providedIn: 'root'
})
export class CustomersService extends InitialServiceClass {

  constructor(store: AngularFirestore, @Inject(String) collectionName: string ) {
    super(store, collectionName);
    this.collectionName = 'customers';
  }

  getAll(): Observable<DocumentData[]> {
    return this.collection.valueChanges({ idFiled: 'id' });
  }

  // getCustomerAvailableTime(id: string) {
  //   return this.collection().doc(id).get('availableTime');
  // }
  update(id: string, newDate: CustomerProfile) {
    return this.collection.doc(id).update(newDate);
  }

  disable(id: string) {
    return this.collection.doc(id).update({'isClient': false});
  }
}
