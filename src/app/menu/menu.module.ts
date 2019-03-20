import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/menu/home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MenuPage,
    children: [
      { path: 'register-car', loadChildren: './register-car/register-car.module#RegisterCarPageModule' },
      { path: 'stadistics', loadChildren: './stadistics/stadistics.module#StadisticsPageModule' },
      { path: 'recharge', loadChildren: './recharge/recharge.module#RechargePageModule' },
      { path: 'home', loadChildren: './home/home.module#HomePageModule' },
      { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
      { path: 'singin', loadChildren: './singin/singin.module#SinginPageModule' },
      { path: 'estadisticas', loadChildren: './estadisticas/estadisticas.module#EstadisticasPageModule' },
      { path: 'navbar', loadChildren: './navbar/navbar.module#NavbarPageModule' },
      { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
        ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
