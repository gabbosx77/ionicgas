import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  constructor(private db: AngularFirestore) { }

  getProfileInf() {
    return this.db.collection('Perfil').snapshotChanges();
  }
}
