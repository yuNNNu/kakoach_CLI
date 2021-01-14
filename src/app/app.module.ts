import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// ReCaptcha
import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';
//Importamos los modulos para trabajar con formularios en angular
import { FormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
/* COMPONENTES */

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
import { PlanComponent } from './pages/plan/plan.component';
import { ColeccionHistoriaComponent } from './pages/coleccion-historia/coleccion-historia.component';
import { CrearusuarioComponent } from './pages/user/crearusuario/crearusuario.component';
import { RecuperarpassComponent } from './pages/user/recuperarpass/recuperarpass.component';
import { BorderFooterComponent } from './pages/herramientas/border-footer/border-footer.component';
import { BodyRecuperarPwComponent } from './pages/user/recuperarpass/body-recuperar-pw/body-recuperar-pw.component';
import { HistoryComponent } from './pages/history/history.component';
import { HistoryBodyComponent } from './pages/history/history-body/history-body.component';
import { ContactmeComponent } from './pages/contactme/contactme.component';
import { ContactBodyComponent } from './pages/contactme/contact-body/contact-body.component';
import { SocialmediaComponent } from './pages/herramientas/socialmedia/socialmedia.component';
import { ImagenColeccionComponent } from './pages/coleccion-historia/imagen-coleccion/imagen-coleccion.component';
import { VoucherComponent } from './pages/plan/voucher/voucher.component';

/* SERVICIOS */

import { PaidService } from './services/webpay/paid.service';
import { CancelledComponent } from './pages/plan/cancelled/cancelled.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NuevapassComponent } from './pages/user/nuevapass/nuevapass.component';
import { CardsComponent } from './pages/coleccion-historia/cards/cards.component';
import { TerminosycondicionesComponent } from './pages/terminosycondiciones/terminosycondiciones.component';
import { BodyTerminosComponent } from './pages/terminosycondiciones/body-terminos/body-terminos.component';


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
    ComenzamosComponent,
    PlanComponent,
    ColeccionHistoriaComponent,
    CrearusuarioComponent,
    RecuperarpassComponent,
    BorderFooterComponent,
    BodyRecuperarPwComponent,
    HistoryComponent,
    HistoryBodyComponent,
    ContactmeComponent,
    ContactBodyComponent,
    SocialmediaComponent,
    ImagenColeccionComponent,
    VoucherComponent,
    CancelledComponent,
    NuevapassComponent,
    CardsComponent,
    TerminosycondicionesComponent,
    BodyTerminosComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    RecaptchaModule,
    RecaptchaFormsModule
  ],
  providers: [PaidService],
  bootstrap: [AppComponent]
})
export class AppModule { }
