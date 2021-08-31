import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Parameters } from 'src/app/modules/shared/models/parameters.model';
import { IdService } from 'src/app/modules/shared/services/ids.service';
import { Booking } from '../../classes/booking.class';
import { BookingsService } from '../../services/bookings.service';

@Component({
  selector: 'app-update-booking',
  templateUrl: './update-booking.component.html',
  styleUrls: ['./update-booking.component.scss']
})
export class UpdateBookingComponent implements OnInit {

  constructor(
    private bookingsService: BookingsService,
    private dialogRef: MatDialogRef<UpdateBookingComponent>,
    @Inject(MAT_DIALOG_DATA) public booking: Booking
  ) { }

  ngOnInit(): void {
    console.log(this.booking)
  }

  updateBooking(booking: Booking): void {
    this.bookingsService.update(String(this.booking.id), booking)
      .then(() => {
        console.log('Booking was succesfully updated');
        this.dialogRef.close(true);
      })
      .catch(error => console.error('Error updating booking: ', error));
  }

  deleteBooking(): void {
    this.bookingsService.delete(String(this.booking.id))
      .then(() => {
        console.log('Booking was succesfully deleted');
        this.dialogRef.close(true);
      })
      .catch(error => console.error('Error deleting booking: ', error));
  }
}
