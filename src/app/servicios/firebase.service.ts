import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';



@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public afs: AngularFirestore) { }

  addcar(value){
    return new Promise<any>((resolve, reject) =>{
      this.afs.collection('UsrCars').add({
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
}
