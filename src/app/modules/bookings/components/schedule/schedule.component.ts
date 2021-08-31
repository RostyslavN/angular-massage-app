import { Component, OnInit} from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { first, Observable, Subscription } from 'rxjs';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

import { Booking } from '../../classes/booking.class';
import { BookingsService } from '../../services/bookings.service';
import { CreateBookingComponent } from '../create-booking/create-booking.component';
import { UpdateBookingComponent } from '../update-booking/update-booking.component';
import { BookingClickEvent } from 'src/app/modules/calendar/models/bookingClickEvent.model';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent implements OnInit {
  bookings: Booking[];

  view: CalendarView = CalendarView.Week;
  viewDate: Date = new Date();

  constructor(
    public bookingsService: BookingsService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getBookings();
  }

  getBookings(): void {
    this.bookingsService.getAll().pipe(first()).subscribe({
      next: (bookings: Booking[]) => {
        this.bookings = bookings;
        console.log('Bookings were successfully received');
      },
      error: err => console.error('Error receiving bookings: ', err)
    });
  }

  getBooking(id: string): Booking {
    return this.bookings.find(booking => booking.id === id) || new Booking();
  }

  openCreateBooking(date?: Date): void {
    const dialogRef: MatDialogRef<CreateBookingComponent> = this.dialog.open(CreateBookingComponent, {
      panelClass: 'modal-window',
      data: new Booking({ time: date }),
      disableClose: true
    });

    dialogRef.afterClosed().pipe(first()).subscribe(isCreated => {
      if (isCreated) this.getBookings();
    });
  }

  openUpdateBooking(event: CalendarEvent): void {
    const dialogRef: MatDialogRef<UpdateBookingComponent> = this.dialog.open(UpdateBookingComponent, {
      panelClass: 'modal-window',
      data: this.getBooking(String(event.id)),
      disableClose: true
    });

    dialogRef.afterClosed().pipe(first()).subscribe(isUpdated => {
      if (isUpdated) this.getBookings();
    });
  }
}
