import { Component } from '@angular/core';
import { AuthService } from '../servicios/auth.service';
import { Router } from '@angular/router';
import { promise } from 'protractor';
import { reject } from 'q';
import { AngularFirestore } from '@angular/fire/firestore';
import { resolve } from 'path';
import { RecargaService } from '../servicios/recarga.service';


@Component({
  selector: 'app-recharge',
  templateUrl: './recharge.page.html',
  styleUrls: ['./recharge.page.scss'],
})
export class RechargePage {

  carga ={
    kminicial: '',
    cantidad: '',
    fecha: ''
  }

  constructor(private recargaservice: RecargaService) {}
    dalegas() {
      this.recargaservice.recharge(this.carga)
      .then(
        res => {
          console.log("recarga exitosa");
          this.carga.kminicial = '';
          this.carga.cantidad = '';
          this.carga.fecha = '';
        }
      )
    }
  



}
