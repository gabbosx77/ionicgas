import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  pages =[
    {
      title: 'Home',
      url: '/menu/home',
      icon: 'home'
    },
    {
      title: 'Reduccion de gasolina',
      children: [
        {
          title: 'Estadisticas',
          url: '/menu/estadisticas',
          icon: 'stats'
        },
        {
          title: 'Recarga de combustible',
          url: '/menu/recharge',
          icon: 'batery-charging'
        },
        {
          title: 'Registro de vehiculo',
          url: '/menu/register-car',
          icon: 'car'
        },
      ]
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
