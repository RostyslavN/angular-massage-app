import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HospitalsModule } from './modules/hospitals/hospitals.module';
import { CustomersModule } from './modules/customers/customers.module';
import { DoctorsModule } from './modules/doctors/doctors.module';
import { BookingsModule } from './modules/bookings/bookings.module';
import { IllnessesModule } from './modules/illnesses/illnesses.module';
import { AuthModule } from './modules/auth/auth.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HospitalsModule,
    CustomersModule,
    DoctorsModule,
    BookingsModule,
    IllnessesModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
