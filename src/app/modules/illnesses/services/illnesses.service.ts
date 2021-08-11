import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class IllnessesService {
  private collectionName: string = 'illnesses';

  constructor(private store: AngularFirestore) { }

  private collection(): AngularFirestoreCollection {
    return this.store.collection(this.collectionName);
  }

  removeIllness(id: string): void {
    this.collection().doc(id).delete();
  }

  updateIllness(id: string, process: 'curing' | 'cured'): void {
    this.collection().doc(id).update({ 'process': process });
  }
}
