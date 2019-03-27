import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' },
  { path: 'perfil', loadChildren: '../perfil/perfil.module#PerfilPageModule' },
  { path: 'first-config', loadChildren: '../first-config/first-config.module#FirstConfigPageModule' },
  { path: 'vehiculos', loadChildren: '../vehiculos/vehiculos.module#VehiculosPageModule' },
  { path: 'register', loadChildren: '../register/register.module#RegisterPageModule' },
  { path: 'home', loadChildren: '../home/home.module#HomePageModule' },
  { path: 'login', loadChildren: '../login/login.module#LoginPageModule' },
  { path: 'singin', loadChildren: '../singin/singin.module#SinginPageModule' },
  { path: 'estadistica', loadChildren: '../estadistica/estadistica.module#EstadisticaPageModule' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
