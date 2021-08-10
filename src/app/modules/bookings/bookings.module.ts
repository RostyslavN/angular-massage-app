import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingsRoutingModule } from './bookings-routing.module';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { BookingFormComponent } from './components/booking-form/booking-form.component';
import { DeleteBookingComponent } from './components/delete-booking/delete-booking.component';
import { UpdateBookingComponent } from './components/update-booking/update-booking.component';
import { CreateBookingComponent } from './components/create-booking/create-booking.component';

@NgModule({
  declarations: [
    ScheduleComponent,
    BookingFormComponent,
    DeleteBookingComponent,
    UpdateBookingComponent,
    CreateBookingComponent
  ],
  imports: [
    CommonModule,
    BookingsRoutingModule
  ]
})
export class BookingsModule { }
