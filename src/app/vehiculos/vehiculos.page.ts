import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicios/auth.service';
import { VehiculoService } from '../servicios/vehiculo.service';
import { FirebaseService } from '../servicios/firebase.service';
import { LoadingController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.page.html',
  styleUrls: ['./vehiculos.page.scss'],
})
export class VehiculosPage implements OnInit {
  items: Array<any>;

  constructor(public authservice: AuthService, public vehiculoservice: VehiculoService,
    public loadingCtrl: LoadingController, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
   /* this.authservice.getAuth().subscribe(auth => {  //conseguimos el uid del usuario logueado
      this.vehiculoservice.getInfoCar(auth.uid).then(user => { //conseguimos los datos del usuario logueado a traves de su uid
        this.infocar = user; //igualamos variables para mostrar en el html
        console.log(user);
        
      }).catch(err => {
        console.log(err);
      })
    })*/
 /*   if (this.route && this.route.data) {
      this.getData();
    }
  }

  async getData(){
    const loading = await this.loadingCtrl.create({
      message: 'Please wait...'
    });
    this.presentLoading(loading);

    this.route.data.subscribe(routeData => {
      routeData['data'].subscribe(data => {
        loading.dismiss();
        this.items = data;
      })
    })
  }

  async presentLoading(loading) {
    return await loading.present();
  }*/
}
}
