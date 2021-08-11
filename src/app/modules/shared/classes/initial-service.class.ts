import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { Service } from '../models/service.model';

export class InitialServiceClass implements Service {
  constructor(public store: AngularFirestore, public collectionName: string) { }

  get collection(): AngularFirestoreCollection {
    return this.store.collection(this.collectionName)
  }
}
