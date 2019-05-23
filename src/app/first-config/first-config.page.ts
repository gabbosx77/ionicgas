import { Component} from '@angular/core';
import { AuthService } from '../servicios/auth.service';
import { Router } from '@angular/router';
import { promise } from 'protractor';
import { reject } from 'q';
import { AngularFirestore } from '@angular/fire/firestore';
import { resolve } from 'path';
import { FirebaseService } from '../servicios/firebase.service';


@Component({
  selector: 'app-first-config',
  templateUrl: './first-config.page.html',
  styleUrls: ['./first-config.page.scss'],
})
export class FirstConfigPage  {

  value ={
    carname: '',
    marca: '',
    modelo: '',
    transmision: '',
    combustible: '',
    rendimiento: ''

  }

  constructor(private firebaseservice: FirebaseService) { }
  clicboton() {
    this.firebaseservice.addcar(this.value)
    .then(
      res => {
        console.log("se ha guardado el vehiculo");
        this.value.carname = '';
        this.value.marca = '';
        this.value.modelo = '';
        this.value.transmision = '';
        this.value.combustible = '';
        this.value.rendimiento = '';
      }
    )
  }

}
