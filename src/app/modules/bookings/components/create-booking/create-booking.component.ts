import { Component, OnInit } from '@angular/core';
import { DocumentReference } from '@angular/fire/firestore';

import { BookingsService } from '../../services/bookings.service';
import { Booking } from '../../models/booking.model';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss']
})
export class CreateBookingComponent implements OnInit {

  constructor(private bookingsService: BookingsService) { }

  ngOnInit(): void {
    // this.createBooking();

    // setTimeout(() => {
    //   console.log(this.createBooking({location: 'address from component #4', time: new Date(2022, 3, 20)}));
    // }, 2000);
  }

  createBooking(booking: Booking): void {
    this.bookingsService.create(booking)
      .then(docRef => console.log(`Booking was succesfully created ${docRef.id}`))
      .catch(error => console.error('Error creating booking: ', error));
  }

}
