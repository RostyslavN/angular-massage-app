import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateBookingComponent } from './components/create-booking/create-booking.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { UpdateBookingComponent } from './components/update-booking/update-booking.component';
import { DeleteBookingComponent } from './components/delete-booking/delete-booking.component';

const routes: Routes = [
  { path: 'createEvent', component: CreateBookingComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: ':id/update-booking', component: UpdateBookingComponent },
  { path: ':id/delete-booking', component: DeleteBookingComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingsRoutingModule { }
