import { Inject, Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { InitialServiceClass } from '../../shared/classes/initial-service.class';
import { Illness } from '../models/illness.model';

@Injectable({
  providedIn: 'root'
})
export class IllnessesService extends InitialServiceClass<Illness> {
  collectionName: string = 'illnesses';

  constructor(store: AngularFirestore) {
    super(store);
  }
}
