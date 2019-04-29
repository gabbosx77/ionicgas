import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { NoaccesoGuard } from './guards/noacceso.guard';



const routes: Routes = [
  { path: '', redirectTo: 'acceso', pathMatch: 'full' },
  { path: 'perfil', loadChildren: './perfil/perfil.module#PerfilPageModule', canActivate : [AuthGuard] },
  { path: 'first-config', loadChildren: './first-config/first-config.module#FirstConfigPageModule' },
  { path: 'vehiculos', loadChildren: './vehiculos/vehiculos.module#VehiculosPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule', canActivate : [AuthGuard] },
  { path: 'singin', loadChildren: './singin/singin.module#SinginPageModule' },
  { path: 'estadistica', loadChildren: './estadistica/estadistica.module#EstadisticaPageModule' },
  { path: 'acceso', loadChildren: './acceso/acceso.module#AccesoPageModule', canActivate : [NoaccesoGuard] },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
