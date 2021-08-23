import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  signin(): void {
    this.authService.googleSignIn()
      .then(() => {
        // this.authService.isNewUser
          // ? this.router.navigate([`/customers/${}profile`])  add customer uid
          // : this.router.navigate(['/bookings/schedule']);
      });
  }
}
