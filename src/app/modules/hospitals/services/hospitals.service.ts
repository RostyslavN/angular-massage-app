import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { HospitalData } from '../models/hospitalData.model';
import { InitialServiceClass } from '../../shared/classes/initial-service.class';

@Injectable({
  providedIn: 'root'
})
export class HospitalsService extends InitialServiceClass<HospitalData> {
  collectionName: string = 'hospitals';

  constructor(store: AngularFirestore) {
    super(store);
  }

  disable(id: string) {
    return this.collection.doc(id).update({'isActive': false});
  }
}
