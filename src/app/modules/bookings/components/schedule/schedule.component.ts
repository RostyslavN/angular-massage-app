import { Component, OnInit} from '@angular/core';
import { first } from 'rxjs';

import { Booking } from '../../models/booking.model';
import { BookingsService } from '../../services/bookings.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent implements OnInit {
  bookings: Booking[] = [];

  constructor(private bookingsService: BookingsService) { }

  ngOnInit(): void {
    this.getBookings();
  }

  getBookings(): void {
    this.bookingsService.getAll().pipe(first()).subscribe({
      next: (bookings: Booking[]) => {
        this.bookings = bookings;
        console.log('Bookings were successfully received', bookings);
      },
      error: err => console.error('Error receiving bookings: ', err)
    });
  }
}
