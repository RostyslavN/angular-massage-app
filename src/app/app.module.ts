import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HospitalsModule } from './modules/hospitals/hospitals.module';
import { CustomersModule } from './modules/customers/customers.module';
import { DoctorsModule } from './modules/doctors/doctors.module';
import { BookingsModule } from './modules/bookings/bookings.module';
import { IllnessesModule } from './modules/illnesses/illnesses.module';
import { AuthModule } from './modules/auth/auth.module';
import { environment } from 'src/environments/environment';
import { AuthInterceptor } from './modules/auth/services/auth.interceptor';
import { AuthGuard } from './modules/auth/services/auth.guard';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HospitalsModule,
    CustomersModule,
    DoctorsModule,
    BookingsModule,
    IllnessesModule,
    AuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
