import { Component, OnInit } from '@angular/core';
import { PerfilService, proinf } from '../servicios/perfil.service';
import { AuthService } from '../servicios/auth.service';
import { ModalController } from '@ionic/angular';


/*interface profinf {
  Fehcanac: string;
  Nombre: string;
  Username: string;
  imgprofile: string;
  id: string;
}*/


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  public perfilinfo: any = [];

  user_logued = {};

  constructor(public authservice: AuthService, public perfilservice: PerfilService, private modal: ModalController) { }

  ngOnInit() {

    this.authservice.getAuth().subscribe(auth => {  //conseguimos el uid del usuario logueado
      this.perfilservice.getInfoUser(auth.uid).then(user => { //conseguimos los datos del usuario logueado a traves de su uid
        this.user_logued = user; //igualamos variables para mostrar en el html
        //console.log(user);
        
      }).catch(err => {
        console.log(err);
      })
    })

   
  }
  /*openperf(proinf){
    this.modal.create({
      component:
    })
  }*/
}
