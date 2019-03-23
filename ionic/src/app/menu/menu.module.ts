import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/menu/home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MenuPage,
    children: [
      { path: 'perfil', loadChildren: '../perfil/perfil.module#PerfilPageModule' },
      { path: 'first-config', loadChildren: '../first-config/first-config.module#FirstConfigPageModule' },
      { path: 'vehiculos', loadChildren: '../vehiculos/vehiculos.module#VehiculosPageModule' },
      { path: 'register', loadChildren: '../register/register.module#RegisterPageModule' },
      { path: 'home', loadChildren: '../home/home.module#HomePageModule' },
      { path: 'login', loadChildren: '../login/login.module#LoginPageModule' },
      { path: 'singin', loadChildren: '../singin/singin.module#SinginPageModule' },
      { path: 'estadistica', loadChildren: '../estadistica/estadistica.module#EstadisticaPageModule' },
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
