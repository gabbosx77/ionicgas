import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Routes
import { app_routing } from './app.routes';


import { AppComponent } from './app.component';
import { FooterComponent } from './componets/footer/footer.component';
import { NavbarComponent } from './componets/navbar/navbar.component';
import { HeaderComponent } from './componets/header/header.component';
import { LoginComponent } from './componets/login/login.component';
import { RegisterComponent } from './componets/register/register.component';
import { HomeComponent } from './componets/home/home.component';
import { BodyComponent } from './componets/body/body.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
