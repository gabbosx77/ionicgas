import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicios/auth.service';
import { VehiculoService } from '../servicios/vehiculo.service';



@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.page.html',
  styleUrls: ['./vehiculos.page.scss'],
})
export class VehiculosPage implements OnInit {
  public carroinfo: any[];
  infocar = {};

  constructor(public authservice: AuthService, public vehiculoservice: VehiculoService) { }

  ngOnInit() {
    this.authservice.getAuth().subscribe(auth => {  //conseguimos el uid del usuario logueado
      this.vehiculoservice.getInfoCar(auth.uid).then(user => { //conseguimos los datos del usuario logueado a traves de su uid
        this.infocar = user; //igualamos variables para mostrar en el html
        console.log(user);
        
      }).catch(err => {
        console.log(err);
      })
    })
  }

}
