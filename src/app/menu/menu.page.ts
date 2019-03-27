import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  pages = [
    {
      title: 'Home',
      url: '/menu/home',
      icon: 'logo-planet'
    },
    {
      title: 'Reduccion de gasolina',
      children: [
        {
          title: 'Register',
          url: '/menu/register',
          icon: 'logo-car'
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
