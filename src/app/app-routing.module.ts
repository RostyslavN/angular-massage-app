import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './modules/auth/services/auth.guard';

const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
  { path: 'bookings', canActivate: [AuthGuard], loadChildren: () => import('./modules/bookings/bookings.module').then(m => m.BookingsModule) },
  { path: 'customers', canActivate: [AuthGuard], loadChildren: () => import('./modules/customers/customers.module').then(m => m.CustomersModule) },
  { path: 'doctors', canActivate: [AuthGuard], loadChildren: () => import('./modules/doctors/doctors.module').then(m => m.DoctorsModule) },
  { path: 'hospitals', canActivate: [AuthGuard], loadChildren: () => import('./modules/hospitals/hospitals.module').then(m => m.HospitalsModule) },
  { path: 'illnesses', canActivate: [AuthGuard], loadChildren: () => import('./modules/illnesses/illnesses.module').then(m => m.IllnessesModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
