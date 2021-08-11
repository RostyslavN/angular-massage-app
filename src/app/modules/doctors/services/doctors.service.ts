import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { DoctorData } from '../models/doctorData';
import { DoctorProfile } from '../models/doctorProfile';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {
  private collectionName: string = 'doctors';

  constructor(private store: AngularFirestore) { }

  private collection(): AngularFirestoreCollection {
    return this.store.collection(this.collectionName);
  }

  addDoctor(doctorData: DoctorData): void {
    this.store.firestore.runTransaction(() => {
      return Promise.all([
        this.collection().add(doctorData)
      ]);
    });
  }

  getDoctors() {
    return this.collection().valueChanges({ idFiled: 'id' });
  }

  disableDoctor(id: string): void {
    this.collection().doc(id).update({'isEmployee': false});
  }

  updateDoctor(id: string, newData: DoctorProfile): void {
    this.collection().doc(id).update(newData);
  }
}
