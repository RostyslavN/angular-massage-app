import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { GoogleAuthProvider } from '@firebase/auth-types';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { JwtHelperService } from '@auth0/angular-jwt';

import { User } from '../models/user.model';
import { StoredUserData } from '../models/storedUserData.model';

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
    fireAuth.onAuthStateChanged(user => {
      if (user) {
        console.log()
      } else {

      }
    });
  }

  private defineUser<T>(): Observable<T | null | undefined> {
    return this.fireAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.store.doc<T>(`users/${user.uid}`).valueChanges({ idField: 'id' })
        } else {
          return of(null);
        }
      })
    );
  }

  async googleSignIn(): Promise<void> {
    const provider: GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({

    });
    return firebase.auth()
      .signInWithPopup(provider)
      .then(credential => {
        if (credential && credential.user) {
          console.log('User is succesfully signed in');
          localStorage.setItem('token', JSON.stringify((<any>credential).credential.idToken));
          const userDataToStore = Object.assign(
            {},
            credential.additionalUserInfo,
            { uid: credential.user.uid, creatinalTime: credential.user.metadata.creationTime }
          );
          localStorage.setItem('user', JSON.stringify(userDataToStore));
        }
      }).catch(error => {
        console.error('Error during sign-in: ', error);
      });
  }

  get isNewUser(): boolean {
    const user: StoredUserData = JSON.parse(localStorage.getItem('user') || '{}');
    if (user) {
      return user.isNewUser;
    } else {
      return false;
    }
  }

  get isAuthenticated(): boolean {
    const token: string | null = localStorage.getItem('token');
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
