import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { SignupComponent } from './components/signup/signup.component';


@NgModule({
  declarations: [
    LoginComponent,
    ForgotPasswordComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  exports: [ ]
})
export class AuthModule { }
