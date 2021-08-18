import { Component, OnInit } from '@angular/core';

import { Booking } from '../../models/booking.model';
import { BookingsService } from '../../services/bookings.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent implements OnInit {
  allBookings: Booking[] = [];

  constructor(private bookingsService: BookingsService) { }

  ngOnInit(): void {
    this.getAllBookings();
  }

  getAllBookings(): void {
    this.bookingsService.getAll().subscribe({
      next: (bookings: Booking[]) => {
        this.allBookings = bookings;
        console.log('Bookings were successfully received');
      },
      error: err => console.error('Error receiving bookings: ', err)
    });
  }
}
