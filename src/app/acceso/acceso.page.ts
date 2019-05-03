import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicios/auth.service';
import { AccesoPageModule } from './acceso.module';
import { Router } from '@angular/router';



@Component({
  selector: 'app-acceso',
  templateUrl: './acceso.page.html',
  styleUrls: ['./acceso.page.scss'],
})
export class AccesoPage implements OnInit {

  email: string;
  password: string;

  constructor(private authservice: AuthService, public router: Router) { }

  ngOnInit() {
  }

  OnSubmitLogin() {
    this.authservice.login(this.email, this.password).then(res => {
      this.router.navigate(['/login']);
    }).catch(err => alert('Datos incorrectos o no existe el usuario'));
  }

}
