import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'singin', loadChildren: './singin/singin.module#SinginPageModule' },
  { path: 'estadisticas', loadChildren: './estadisticas/estadisticas.module#EstadisticasPageModule' },  { path: 'navbar', loadChildren: './navbar/navbar.module#NavbarPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
