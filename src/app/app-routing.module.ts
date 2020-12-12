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

// Resolvers
import { plansDataResolver } from './resolvers/ plansDataResolver';




const routes: Routes = [
  { path: '', component: InicioComponent },

  { path: 'planes', component: PlanesComponent,
   resolve: {
     data : plansDataResolver
   }},

  { path: 'plan', component: PlanComponent },
  { path: 'coleccion', component: ColeccionHistoriaComponent },
  { path: 'historia', component: HistoryComponent},
  { path: 'crear-usuario', component: CrearusuarioComponent },
  { path: 'recuperar-password', component: RecuperarpassComponent },
  { path: 'contact', component: ContactmeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
