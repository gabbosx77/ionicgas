import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicios/auth.service';



@Component({
  selector: 'app-acceso',
  templateUrl: './acceso.page.html',
  styleUrls: ['./acceso.page.scss'],
})
export class AccesoPage implements OnInit {

  email: string;
  password: string;

  constructor(private authservice: AuthService) { }

  ngOnInit() {
  }

  OnSubmitLogin()
  {
    this.authservice.login(this.email, this.password);
  }

}
