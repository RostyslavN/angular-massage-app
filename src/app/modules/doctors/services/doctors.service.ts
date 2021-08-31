import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { InitialServiceClass } from '../../shared/classes/initial-service.class';
import { Doctor } from '../models/doctor.model';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService extends InitialServiceClass<Doctor> {
  collectionName: string = 'doctors';

  constructor(store: AngularFirestore) {
    super(store);
  }

  disable(id: string): Promise<void> {
    return this.collection.doc(id).update({'isEmployee': false});
  }
}
