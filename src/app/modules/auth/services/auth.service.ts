import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { GoogleAuthProvider, OAuthCredential } from '@firebase/auth-types';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { JwtHelperService } from '@auth0/angular-jwt';
// import { Auth, getAuth, GoogleAuthProvider, signInWithPopup } from '@firebase/auth';

import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<User| undefined | null>;

  constructor(
    private fireAuth: AngularFireAuth,
    private store: AngularFirestore,
    private router: Router,
    private jwtHelperService: JwtHelperService
  ) {
    this.user$ = this.defineUser<User>();
  }

  private defineUser<T>(): Observable<T | null | undefined> {
    return this.fireAuth.authState.pipe(
      switchMap(user => {
        if (user) return this.store.doc<T>(`users/${user.uid}`).valueChanges({ isField: 'id' })
        else return of(null);
      })
    );
  }

  async googleSignIn(): Promise<void> {
    const provider: GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({
      prompt: 'select_account'
    });
    return firebase.auth()
      .signInWithPopup(provider)
      .then(result => {
        console.log('User is succesfully signed in');
        localStorage.setItem('token', JSON.stringify((<any>result).credential.idToken));
        localStorage.setItem('user', JSON.stringify(result.user));
      }).catch(error => {
        console.error('Error during sign-in: ', error);
      });
  }

  get isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    if (token) return !this.jwtHelperService.isTokenExpired(token);
    else return false;
  }

  async googleSignOut(): Promise<Boolean> {
    await this.fireAuth.signOut();
    return this.router.navigate(['/']);
  }

  // private updateUserData({ uid }: User): Promise<void> {
  //   const userRef: AngularFirestoreDocument<User> = this.store.doc(`users/${uid}`);
  //   const data: User = { uid };
  //   return userRef.set(data, { merge: true });
  // }
}
