import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthRoutingModule } from './auth-routing.module';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { AuthInterceptor } from './services/auth.interceptor';
import { AuthGuard } from './services/auth.guard';


@NgModule({
  declarations: [
    ForgotPasswordComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatButtonModule
  ],
  exports: [ ],
  providers: [
    // { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    // AuthGuard
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService
  ]
})
export class AuthModule { }
