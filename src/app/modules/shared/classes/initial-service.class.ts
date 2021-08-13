import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { Service } from '../models/service.model';

export class InitialServiceClass<T> implements Service {
  collectionName: string = 'entities';

  constructor(public store: AngularFirestore) { }

  get collection(): AngularFirestoreCollection<T> {
    return this.store.collection<T>(this.collectionName);
  }

  getAll(): Observable<T[]> {
    return this.collection.valueChanges({ idFiled: 'id' });
  }

  delete(id: string): Promise<void> {
    return this.collection.doc(id).delete();
  }

  getById(id: string): Observable<T | undefined> {
    return this.collection.doc(id).valueChanges({ isField: 'id' });
  }

  create(entity: T): Promise<DocumentReference<T>> {
    return this.collection.add(entity);
  }

  add(data: T): Promise<DocumentReference<T>> {
    return this.collection.add(data);
  }

  update(id: string, entity: T): Promise<void> {
    return this.collection.doc(id).update(entity);
  }
}
