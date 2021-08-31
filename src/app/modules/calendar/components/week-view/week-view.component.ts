import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { Subject } from 'rxjs';

import { BookingClickEvent } from '../../models/bookingClickEvent.model';
import { TimeClickEvent } from '../../models/timeClickEvent.model';

@Component({
  selector: 'app-week-view',
  templateUrl: './week-view.component.html',
  styleUrls: ['./week-view.component.scss']
})
export class WeekViewComponent implements OnInit {
  @Input() events: CalendarEvent[] = [];
  @Input() viewDate: Date;

  @Output() create: EventEmitter<TimeClickEvent> = new EventEmitter<TimeClickEvent>();
  @Output() update: EventEmitter<BookingClickEvent> = new EventEmitter<BookingClickEvent>();

  refresh: Subject<any> = new Subject();

  constructor() { }

  ngOnInit(): void {
  }

  emitCreate(event: TimeClickEvent): void {
    this.create.emit(event);
  }

  emitUpdate(event: BookingClickEvent): void {
    this.update.emit(event);
  }

  // openBooking({ event }: { event: CalendarEvent }) {
  //   this.bookingsService.getById(String(event.id)).pipe(first()).subscribe(res => this.booking = res || new Booking());
  //   const dialogRef: MatDialogRef<UpdateBookingComponent> = this.dialog.open(UpdateBookingComponent, {
  //     panelClass: 'modal-window',
  //     data: new Booking(this.booking),
  //     disableClose: true
  //   });

  //   // dialogRef.afterClosed().pipe(first()).subscribe(() => {
  //   //   if (isCreated) this.getBookings();
  //   // });
  // }
}
