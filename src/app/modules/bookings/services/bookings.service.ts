import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import firebase from 'firebase/app';

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

  mapEntity(entity: Booking & {time: { toDate: any }}): Booking {
    return {
      ...entity,
      time: entity.time.toDate()
    }
  }
}
