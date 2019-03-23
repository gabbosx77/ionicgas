import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  pages = [
    {
      title: 'Main',
      url: '/menu/main',
      icon: 'home'
    },
    {
      title: 'Reduccion de gasolina',
      children: [
        {
          title: 'Home',
          url: '/menu/home',
          icon: 'home'
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
