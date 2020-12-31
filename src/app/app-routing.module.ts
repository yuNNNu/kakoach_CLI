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

// Resolvers
import { plansCategoriesResolver } from './resolvers/plansCategoriesResolver';
import { plansDataResolver } from './resolvers/plansDataResolver';
import { cardResolver } from './resolvers/cardDataresolver';
import { secondaryPlanResolver } from './resolvers/secondaryPlanResolver';
import { plansPersonalResolver } from './resolvers/planPersonalResolver'; 
import { benefitInicioResolver } from './resolvers/benefitsInicioResolver';


const routes: Routes = [
  { path: '', component: InicioComponent,
    resolve: {

     secondaryplans : secondaryPlanResolver,
     plans : plansDataResolver,
     benefits : benefitInicioResolver
   }},

  { path: 'planes', component: PlanesComponent,
   resolve: {
     categories : plansCategoriesResolver,
     plans : plansDataResolver
   }},

  { path: 'plan/:id', component: PlanComponent,
   resolve: {
     plans : plansDataResolver,
     plan : plansPersonalResolver
   }
  },
  { path: 'coleccion', component: ColeccionHistoriaComponent },
  { path: 'historia/:id', component: HistoryComponent,
    resolve: {
      card : cardResolver
    }},
  { path: 'crear-usuario', component: CrearusuarioComponent },
  { path: 'recuperar-password', component: RecuperarpassComponent },
  { path: 'contact', component: ContactmeComponent },
  { path: 'nueva-password', component: NuevapassComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
