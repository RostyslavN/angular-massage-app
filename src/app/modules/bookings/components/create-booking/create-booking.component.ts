import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { BookingsService } from '../../services/bookings.service';
import { Booking } from '../../classes/booking.class';


@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss']
})
export class CreateBookingComponent implements OnInit {
  constructor(
    private bookingsService: BookingsService,
    private dialogRef: MatDialogRef<CreateBookingComponent>,
    @Inject(MAT_DIALOG_DATA) public booking: Booking
  ) {}

  ngOnInit(): void {
  }

  createBooking(booking: Booking): void {
    this.bookingsService.create(booking)
      .then(docRef => {
        console.log(`Booking was succesfully created ${docRef.id}`);
        this.dialogRef.close(true);
      })
      .catch(error => console.error('Error creating booking: ', error));
  }
}
