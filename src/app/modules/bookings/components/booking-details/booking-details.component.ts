import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { Parameters } from 'src/app/modules/shared/models/parameters.model';
import { IdService } from 'src/app/modules/shared/services/ids.service';

import { Booking } from '../../classes/booking.class';
import { BookingsService } from '../../services/bookings.service';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.scss']
})
export class BookingDetailsComponent implements OnInit {
  private params: Parameters = { currentId: '' };
  bookingDetails: Booking | undefined;

  constructor(
    private bookingsService: BookingsService,
    private idService: IdService
  ) { }

  ngOnInit(): void {
    this.idService.get(this.params);
    this.getBookingDetails(this.params.currentId);
  }

  getBookingDetails(id: string): void {
    this.bookingsService.getById(id).pipe(first()).subscribe({
      next: booking => {
        this.bookingDetails = booking;
        console.log('Booking details were successfully received');
      },
      error: err => console.error('Error receiving booking: ', err)
    })
  }
}
