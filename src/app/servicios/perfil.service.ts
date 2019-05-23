import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuth } from '@angular/fire/auth';
import { promise } from 'protractor';
import { reject } from 'q';
import { map } from 'rxjs/operators';

export interface proinf {
  Fehcanac: string
  id: string
  imgprofile: string
  Nombre: string
  Username: string
}



@Injectable({
  providedIn: 'root'
})

export class PerfilService {

  constructor(private db: AngularFirestore) { }

  getProfileInf() {
    return this.db.collection('users').snapshotChanges().pipe(map(rooms => {
      return rooms.map(a =>{
        const data = a.payload.doc.data() as proinf;
        data.id = a.payload.doc.id;
        return data;
      })
    }))
  };

  getInfoUser(uid: string){
    return new Promise((resolve, rejected) => {
      this.db.doc(`users/${uid}`).ref.get().then( user => {
        resolve(user.data())
      }).catch(error => {
        rejected(error);
      })
    })
  }

 
}
