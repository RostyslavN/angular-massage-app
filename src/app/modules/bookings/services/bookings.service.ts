import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { Booking } from '../models/booking';

@Injectable({
  providedIn: 'root'
})
export class BookingsService {
  private collectionName: string = 'bookings';

  constructor(private store: AngularFirestore) { }

  private collection(): AngularFirestoreCollection {
    return this.store.collection(this.collectionName);
  }

  // add function return type
  getBookings() {
    return this.collection().valueChanges({ idFiled: 'id' });
  }

  createBooking(booking: Booking): void {
    this.store.firestore.runTransaction(() => {
      return Promise.all([
        this.collection().add(booking)
      ]);
    });
  }

  updateBooking(id: string, newBooking: Booking): void {
    this.collection().doc(id).update(newBooking);
  }

  deleteBooking(id: string): void {
    this.collection().doc(id).delete();
  }
}
