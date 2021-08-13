import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';

import { InitialServiceClass } from '../../shared/classes/initial-service.class';
import { Booking } from '../models/booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookingsService extends InitialServiceClass<Booking> {
  collectionName: string = 'bookings';

  constructor(public store: AngularFirestore) {
    super(store);
  }
}
