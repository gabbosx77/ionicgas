import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './componets/login/login.component';
import { HomeComponent } from './componets/home/home.component';
import { RegisterComponent } from './componets/register/register.component';

const app_routes: Routes = [
    // home route
    { path: 'home', component: HomeComponent},
    // loggin Route
    { path: 'login', component: LoginComponent},
    // register route
    { path: 'register', component: RegisterComponent},
    // Default Route
    { path: '**', pathMatch: 'full', redirectTo: 'login'},
];

export const app_routing = RouterModule.forRoot(app_routes);
