import { Inject, Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { HospitalData } from '../models/hospitalData.model';
import { InitialServiceClass } from '../../shared/classes/initial-service.class';

@Injectable({
  providedIn: 'root'
})
export class HospitalsService extends InitialServiceClass {

  constructor(store: AngularFirestore, @Inject(String) collectionName: string) {
    super(store, collectionName);
    this.collectionName = 'hospitals';
  }

  add(hospitalData: Omit<HospitalData, 'id'>) {
    return this.store.firestore.runTransaction(() => {
      return Promise.all([
        this.collection.add(hospitalData)
      ]);
    })
  }

  disable(id: string) {
    return this.collection.doc(id).update({'isActive': false});
  }
}
