import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { HospitalData } from '../../models/hospitalData';

@Injectable({
  providedIn: 'root'
})
export class HospitalsService {
  private collectionName: string = 'hospitals';

  constructor(private store: AngularFirestore) { }

  private collection(): AngularFirestoreCollection {
    return this.store.collection(this.collectionName);
  }

  addHospital(hospitalData: HospitalData): void {
    this.store.firestore.runTransaction(() => {
      return Promise.all([
        this.collection().add(hospitalData)
      ]);
    })
  }

  disableHospital(id: string): void {
    this.collection().doc(id).update({'isActive': false});
  }
}
