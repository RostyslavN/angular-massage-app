import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
  { path: 'bookings', loadChildren: () => import('./modules/bookings/bookings.module').then(m => m.BookingsModule) },
  { path: 'customers', loadChildren: () => import('./modules/customers/customers.module').then(m => m.CustomersModule) },
  { path: 'doctors', loadChildren: () => import('./modules/doctors/doctors.module').then(m => m.DoctorsModule) },
  { path: 'hospitals', loadChildren: () => import('./modules/hospitals/hospitals.module').then(m => m.HospitalsModule) },
  { path: 'illnesses', loadChildren: () => import('./modules/illnesses/illnesses.module').then(m => m.IllnessesModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
