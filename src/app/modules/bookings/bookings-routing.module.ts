import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateBookingComponent } from './components/create-booking/create-booking.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { UpdateBookingComponent } from './components/update-booking/update-booking.component';
import { DeleteBookingComponent } from './components/delete-booking/delete-booking.component';
import { BookingDetailsComponent } from './components/booking-details/booking-details.component';

const routes: Routes = [
  { path: 'create', component: CreateBookingComponent },
  { path: 'schedule', component: ScheduleComponent },
  {
    path: ':id',
    children: [
      {
        path: 'update',
        component: UpdateBookingComponent
      },
      {
        path: 'delete',
        component: DeleteBookingComponent
      },
      {
        path: 'details',
        component: BookingDetailsComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingsRoutingModule { }
