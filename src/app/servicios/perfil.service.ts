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

  getInfoUser(uid:string){
    return new Promise((resolve, rejected) => {
      this.db.doc(`users/${uid}`).ref.get().then( user => {
        resolve(user.data())
      }).catch(error => {
        rejected(error);
      })
    })
  }

  getCarInfo() {
    return this.db.collection('UserCars').snapshotChanges().pipe(map(rooms => {
      return rooms.map(a =>{
        const data = a.payload.doc.data() as procar;
        data.id = a.payload.doc.id;
        return data;
      })
    }))
  };

  getCarInf() {
    return this.db.collection('UserCars').snapshotChanges().pipe(map(rooms => {
      return rooms.map(a =>{
        const data = a.payload.doc.data() as proinf;
        data.id = a.payload.doc.id;
        return data;
      })
    }))
  };

  getInfoCar(uid:string){
    return new Promise((resolve, rejected) => {
      this.db.doc(`UserCars/${uid}`).ref.get().then( car => {
        resolve(car.data())
      }).catch(error => {
        rejected(error);
      })
    })
  }

}
