import { Pipe, PipeTransform } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';

import { Booking } from '../classes/booking.class';

@Pipe({
  name: 'mapBookingToCalendarEvent'
})
export class MapBookingToCalendarEventPipe implements PipeTransform {
  transform(bookings: Booking[]): CalendarEvent[] {
    return bookings.map((booking: Booking): CalendarEvent => {
     return {
        title: booking.name,
        start: new Date(booking.time),
        id: booking.id
      };
    });
  }
}
