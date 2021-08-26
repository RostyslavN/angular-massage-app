import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { BookingsRoutingModule } from './bookings-routing.module';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { BookingFormComponent } from './components/booking-form/booking-form.component';
import { DeleteBookingComponent } from './components/delete-booking/delete-booking.component';
import { UpdateBookingComponent } from './components/update-booking/update-booking.component';
import { CreateBookingComponent } from './components/create-booking/create-booking.component';
import { BookingDetailsComponent } from './components/booking-details/booking-details.component';
import { MapBookingToCalendarEventPipe } from './pipes/map-booking-tool-event.pipe';
import { CalendarModule } from '../calendar/calendar.module';

@NgModule({
  declarations: [
    ScheduleComponent,
    BookingFormComponent,
    DeleteBookingComponent,
    UpdateBookingComponent,
    CreateBookingComponent,
    BookingDetailsComponent,
    MapBookingToCalendarEventPipe,
  ],
  imports: [
    CommonModule,
    BookingsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    CalendarModule,
    MatAutocompleteModule
  ]
})
export class BookingsModule { }
