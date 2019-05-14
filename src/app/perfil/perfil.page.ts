import { Component, OnInit } from '@angular/core';
import { PerfilService } from '../servicios/perfil.service';
import { AuthService } from '../servicios/auth.service';

interface proinf {
  Fehcanac: string
  id: string
  imgprofile: string
  Nombre: string
  Username: string
}
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

  constructor(public authservice: AuthService, public perfilservice: PerfilService) { }

  ngOnInit() {
    this.perfilservice.getProfileInf().subscribe( profinfs => {
      profinfs.map( profinf => {
        /*console.log(inf.payload.doc.data())*/

        const data: proinf = profinf.payload.doc.data() as proinf;

        data.id = profinf.payload.doc.id;
      this.perfilinfo.push(data);


      });
    });
  }

}
