import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { BookingsRoutingModule } from './bookings-routing.module';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { BookingFormComponent } from './components/booking-form/booking-form.component';
import { DeleteBookingComponent } from './components/delete-booking/delete-booking.component';
import { UpdateBookingComponent } from './components/update-booking/update-booking.component';
import { CreateBookingComponent } from './components/create-booking/create-booking.component';
import { BookingDetailsComponent } from './components/booking-details/booking-details.component';
import { CustomCalendarModule } from '../custom-calendar/custom-calendar.module';
import { MapBookingToolEventPipe } from './pipes/map-booking-tool-event.pipe';

@NgModule({
  declarations: [
    ScheduleComponent,
    BookingFormComponent,
    DeleteBookingComponent,
    UpdateBookingComponent,
    CreateBookingComponent,
    BookingDetailsComponent,
    MapBookingToolEventPipe,
  ],
  imports: [
    CommonModule,
    BookingsRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    CustomCalendarModule
  ]
})
export class BookingsModule { }
