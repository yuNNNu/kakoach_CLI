import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PlanComponent } from './pages/plan/plan.component';
import { PlanesComponent } from './pages/planes/planes.component';
import { ColeccionHistoriaComponent } from './pages/coleccion-historia/coleccion-historia.component';
import { HistoriaComponent } from './pages/historia/historia.component';
import { CrearusuarioComponent } from './pages/user/crearusuario/crearusuario.component';
import { BorderFooterComponent } from './pages/herramientas/border-footer/border-footer.component';




const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'planes', component: PlanesComponent },
  { path: 'plan', component: PlanComponent },
  { path: 'coleccion', component: ColeccionHistoriaComponent },
  { path: 'historia', component: HistoriaComponent },
  { path: 'crear-usuario', component: CrearusuarioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
