import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { promise } from 'protractor';
import { reject } from 'q';
import { resolve } from 'path';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { auth } from 'firebase';
import { NAMESPACE_URIS } from '@angular/platform-browser/src/dom/dom_renderer';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFauth: AngularFireAuth, private router: Router, private db: AngularFirestore) { }

  login(email: string, password: string) {

    return new Promise((resolve, rejected) => {
      this.AFauth.auth.signInWithEmailAndPassword(email, password).then(user => {
        resolve(user);
      }).catch(err => rejected(err));
    });
  }

  logout() {
    this.AFauth.auth.signOut().then(() => {
      this.router.navigate(['/acceso']);
    });
  }

  register(email: string, password: string, name: string, nombreuser: string){
    return new Promise((resolve, reject) => {
      this.AFauth.auth.createUserWithEmailAndPassword(email, password).then(res => {
        const uid = res.user.uid;
        this.db.collection('users').doc(uid).set({
          name : name,
          uid : uid,
          usrname : nombreuser
        })
        resolve(res)
      }).catch(err => reject(err))
    })
  }

  /*addcar(marca: string, modelo: string, combustible: string, consumo: string){
    return new Promise((resolve, reject)=>{
      this.AFauth.auth.
      this.db.collection('UsrCars').
    })

  }*/

  getAuth(){   //este metodo retorna el objeto auth con las propiedades de authenticacion del usuario
    return this.AFauth.authState;
  }
  
}