import { ChangeDetectionStrategy, Component, OnChanges, OnInit, SimpleChange } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import { first } from 'rxjs';

import { Booking } from '../../models/booking.model';
import { BookingsService } from '../../services/bookings.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent implements OnInit {
  allBookings: Booking[] = [];
  // events: CalendarEvent[] = ;

  constructor(private bookingsService: BookingsService) { }

  ngOnInit(): void {
    this.getAllBookings();
  }

  // ngOnChanges(changes: SimpleChange): void {
  //   if (this.events.toString() !== this.formEvents.toString()) {
  //     this.events = this.formEvents;
  //   }
  // }

  getAllBookings(): void {
    this.bookingsService.getAll().pipe(first()).subscribe({
      next: (bookings: Booking[]) => {
        this.allBookings = bookings;
        console.log('Bookings were successfully received', bookings);
      },
      error: err => console.error('Error receiving bookings: ', err)
    });
  }

  // get formEvents(): CalendarEvent[] {
  //   const result: CalendarEvent[] = [];
  //   this.allBookings.forEach(booking => {
      // result.push({
      //   title: booking.name,
      //   start: booking.time.toDate()
      // });
  //   });
  //   return result;
  // }
}
