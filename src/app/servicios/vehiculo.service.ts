import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuth } from '@angular/fire/auth';
import { promise } from 'protractor';
import { reject } from 'q';
import { map } from 'rxjs/operators';

export interface procar{
  carname: string;
  marca: string;
  modelo: string;
  transmision: string;
  combustible: string;
  consumo: string;
  id: string;
}
@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  constructor(private db: AngularFirestore) { }


  getCarInf() {
    return this.db.collection('UserCars').snapshotChanges().pipe(map(rooms => {
      return rooms.map(a =>{
        const data = a.payload.doc.data() as procar;
        data.id = a.payload.doc.id;
        return data;
      })
    }))
  };

  getInfoCar(uid: string) {
    return new Promise((resolve, rejected) => {
      this.db.doc(`UserCars/${uid}`).ref.get().then( usr => {
        resolve(usr.data())
      }).catch(error => {
        rejected(error);
      })
    })
  };
}
