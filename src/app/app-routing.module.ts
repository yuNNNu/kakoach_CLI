import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PlanComponent } from './pages/plan/plan.component';
import { PlanesComponent } from './pages/planes/planes.component';
import { ColeccionHistoriaComponent } from './pages/coleccion-historia/coleccion-historia.component';
import { CrearusuarioComponent } from './pages/user/crearusuario/crearusuario.component';
import { BorderFooterComponent } from './pages/herramientas/border-footer/border-footer.component';
import { RecuperarpassComponent } from './pages/user/recuperarpass/recuperarpass.component';
import { HistoryComponent } from './pages/history/history.component';
import { ContactmeComponent } from './pages/contactme/contactme.component';
import { NuevapassComponent } from './pages/user/nuevapass/nuevapass.component';
import { TerminosycondicionesComponent } from './pages/terminosycondiciones/terminosycondiciones.component';
import { NavbarComponent } from './pages/inicio/navbar/navbar.component';
// Resolvers
import { plansCategoriesResolver } from './resolvers/plansCategoriesResolver';
import { plansDataResolver } from './resolvers/plansDataResolver';
import { cardResolver } from './resolvers/cardDataresolver';
import { secondaryPlanResolver } from './resolvers/secondaryPlanResolver';
import { plansPersonalResolver } from './resolvers/planPersonalResolver';
import { benefitInicioResolver } from './resolvers/benefitsInicioResolver';
import { FirstImageSobreMiResolver } from './resolvers/PrincipalImageSobreMiResolver';
import { socialMediaResolver } from './resolvers/socialMediaResolver';
import { PrincipalImagePlansResolver } from './resolvers/PrincipalImagePlanesResolver';
import { termsResolver } from './resolvers/termsResolver';
import { PrincipalImageInicioResolver } from './resolvers/PrincipalImageInicioResolver';
import { LogoNavbarResolver } from './resolvers/LogoNavbarResolver';

const routes: Routes = [


  {
    path: '', component: InicioComponent,
    resolve: {
      secondaryplans: secondaryPlanResolver,
      plans: plansDataResolver,
      benefits: benefitInicioResolver
    }
  },
  {
    path: 'login/:token', component: InicioComponent,
    resolve: {

      secondaryplans: secondaryPlanResolver,
      plans: plansDataResolver,
      benefits: benefitInicioResolver
    }
  },
  {
    path: 'planes', component: PlanesComponent,
    resolve: {
      categories: plansCategoriesResolver,
      plans: plansDataResolver,
      image: PrincipalImagePlansResolver
    }
  },

  {
    path: 'plan/:url', component: PlanComponent,
    resolve: {
      plans: plansDataResolver,
      plan: plansPersonalResolver
    }
  },
  {
    path: 'sobremi', component: ColeccionHistoriaComponent,
    resolve: {
      image: FirstImageSobreMiResolver,
      cards: cardResolver,
      social: socialMediaResolver

    }
  },
  {
    path: 'sobremi/:id', component: HistoryComponent,
    resolve: {
      card: cardResolver
    }
  },
  { path: 'crear-usuario', component: CrearusuarioComponent },
  { path: 'recuperar-contrasena', component: RecuperarpassComponent },
  { path: 'contactame', component: ContactmeComponent },
  { path: 'nueva-contrasena/:token', component: NuevapassComponent },
  {
    path: 'terminos-y-condiciones', component: TerminosycondicionesComponent,
    resolve: {
      terms: termsResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
