import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import 'firebase/storage';
import * as firebase from 'firebase/app';


@Injectable({
  providedIn: 'root'
})
export class RecargaService {

  constructor(public afs: AngularFirestore, public afauth: AngularFireAuth) { }

  recharge(carga) {
    return new Promise<any>((resolve, reject) => {
      let currentUser = firebase.auth().currentUser;
      this.afs.collection('users').doc(currentUser.uid).collection('recharge').add({
        kminicial: carga.kminicial,
        cantidad: carga.cantidad,
        fecha: carga.fecha,
      })
      .then(res => 
        resolve(res)
      , err => reject(err))
    })
  }
}
