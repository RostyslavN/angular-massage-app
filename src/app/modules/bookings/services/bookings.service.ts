import { Inject, Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { InitialServiceClass } from '../../shared/classes/initial-service.class';
import { Booking } from '../models/booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookingsService extends InitialServiceClass {
  constructor(store: AngularFirestore, @Inject(String) collectionName: string) {
    super(store, collectionName);
    this.collectionName = 'booking';
  }

  getAll(): Observable<DocumentData> {
    return this.collection.valueChanges({ idFiled: 'id' });
  }

  create(booking: Omit<Booking, 'id'>) {
    return this.store.firestore.runTransaction(() => {
      return Promise.all([
        this.collection.add(booking)
      ]);
    });
  }

  update(id: string, newBooking: Booking) {
    return this.collection.doc(id).update(newBooking);
  }

  delete(id: string) {
    return this.collection.doc(id).delete();
  }
}
