import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

import { Customer } from '../../customers/models/customer.model';
import { Doctor } from '../../doctors/models/doctor.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // customer$: Observable<Customer | null>;
  // doctor$: Observable<Doctor | null>;

  constructor(
    private fireAuth: AngularFireAuth,
    private store: AngularFirestore,
    private router: Router
  ) {
    // this.customer$ = this.fireAuth.authState;
    // this.doctor$ = this.fireAuth.authState;
  }
}
