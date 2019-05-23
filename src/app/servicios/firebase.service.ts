import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import 'firebase/storage';
import * as firebase from 'firebase/app';



@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private sanpshotChangesSubscription: any;

  constructor(public afs: AngularFirestore, public afauth: AngularFireAuth) { }

  addcar(value) {
    return new Promise<any>((resolve, reject) => {
      let currentUser = firebase.auth().currentUser;
      this.afs.collection('users').doc(currentUser.uid).collection('UsrCars').add({
        carname: value.carname,
        marca: value.marca,
        modelo: value.modelo,
        transmision: value.transmision,
        combustible: value.combustible,
        rendimiento: value.rendimiento
      })
      .then(res => 
        resolve(res)
      , err => reject(err))
    })
  }

  getcar(){
    return new Promise<any>((resolve, reject) => {
      this.afauth.user.subscribe(currentUser =>{
        if (currentUser){
          this.sanpshotChangesSubscription = this.afs.collection('users').doc(currentUser.uid).collection('UsrCars').snapshotChanges();
          resolve(this.sanpshotChangesSubscription);
        }
      });
    })
  }

 
}
