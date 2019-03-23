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
      icon: 'home'
    },
    {
      title: 'Reduccion de gasolina',
      children: [
        {
          title: 'Home',
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
