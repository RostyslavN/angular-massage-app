import { AngularFirestoreCollection } from '@angular/fire/firestore';

export interface Service {
  collectionName: string;
  readonly collection: AngularFirestoreCollection;
}
