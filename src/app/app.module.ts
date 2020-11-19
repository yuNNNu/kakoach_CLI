import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './pages/inicio/navbar/navbar.component';
import { PrincipalimageComponent } from './pages/inicio/principalimage/principalimage.component';
import { InicioComponent } from './pages/inicio/inicio.component';
<<<<<<< HEAD
import { BenefitsComponent } from './pages/inicio/benefits/benefits.component';
=======
import { PlanesEstrellasComponent } from './pages/inicio/planes-estrellas/planes-estrellas.component';
import { FooterComponent } from './pages/inicio/footer/footer.component';
>>>>>>> f2e7d2cb30adf74ccf501e5eefdf9518f0464a8d

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PrincipalimageComponent,
    InicioComponent,
<<<<<<< HEAD
    BenefitsComponent
=======
    PlanesEstrellasComponent,
    FooterComponent
>>>>>>> f2e7d2cb30adf74ccf501e5eefdf9518f0464a8d
  ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
