import { Inject, Injectable } from '@angular/core';
import { AngularFirestore, DocumentData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { InitialServiceClass } from '../../shared/classes/initial-service.class';
import { DoctorData } from '../models/doctorData.model';
import { DoctorProfile } from '../models/doctorProfile.model';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService extends InitialServiceClass {

  constructor(store: AngularFirestore, @Inject(String) collectionName: string) {
    super(store, collectionName);
    this.collectionName = 'doctors';
  }

  add(doctorData: Omit<DoctorData, 'id'|'isEmployee'>) {
    return this.store.firestore.runTransaction(() => {
      return Promise.all([
        this.collection.add(doctorData)
      ]);
    });
  }

  getAll(): Observable<DocumentData> {
    return this.collection.valueChanges({ idFiled: 'id' });
  }

  disable(id: string) {
    return this.collection.doc(id).update({'isEmployee': false});
  }

  update(id: string, newData: DoctorProfile) {
    return this.collection.doc(id).update(newData);
  }
}
