import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

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
    SocialmediaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
