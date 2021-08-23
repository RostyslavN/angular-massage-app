import { Pipe, PipeTransform } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';

import { Booking } from '../models/booking.model';

@Pipe({
  name: 'mapBookingToCalendarEvent'
})
export class MapBookingToolEventPipe implements PipeTransform {

  transform(bookings: Booking[]): CalendarEvent[] {
    return bookings.map((booking: Booking): CalendarEvent => {
     return {
        title: booking.name,
        start: booking.time.toDate()
      };
    });
  }


}
