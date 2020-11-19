import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './pages/inicio/navbar/navbar.component';
import { PrincipalimageComponent } from './pages/inicio/principalimage/principalimage.component';
import { PlanesEstrellasComponent } from './pages/inicio/planes-estrellas/planes-estrellas.component';
import { BenefitsComponent } from './pages/inicio/benefits/benefits.component';
import { FooterComponent } from './pages/inicio/footer/footer.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PlanesComponent } from './pages/planes/planes.component';
import { ImagenPrincipalComponent } from './pages/planes/imagen-principal/imagen-principal.component';
import { ShortPlansComponent } from './pages/planes/short-plans/short-plans.component';
import { ComenzamosComponent } from './pages/planes/comenzamos/comenzamos.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PrincipalimageComponent,
    PlanesEstrellasComponent,
    BenefitsComponent,
    FooterComponent,
    InicioComponent,
    PlanesComponent,
    ImagenPrincipalComponent,
    ShortPlansComponent,
    ComenzamosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
