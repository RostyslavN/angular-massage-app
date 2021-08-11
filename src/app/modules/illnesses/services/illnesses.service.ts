import { Inject, Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { InitialServiceClass } from '../../shared/classes/initial-service.class';

@Injectable({
  providedIn: 'root'
})
export class IllnessesService extends InitialServiceClass {

  constructor(store: AngularFirestore, @Inject(String) collectionName: string) {
    super(store, collectionName);
    this.collectionName = 'illnesses';
  }

  remove(id: string) {
    return this.collection.doc(id).delete();
  }

  update(id: string, process: 'curing' | 'cured') {
    return this.collection.doc(id).update({ 'process': process });
  }
}
