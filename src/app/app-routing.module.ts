import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PlanComponent } from './pages/plan/plan.component';
import { PlanesComponent } from './pages/planes/planes.component';
import { ColeccionHistoriaComponent } from './pages/coleccion-historia/coleccion-historia.component';
import { HistoriaComponent } from './pages/historia/historia.component';



const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'planes', component: PlanesComponent },
  { path: 'plan', component: PlanComponent },
  { path: 'coleccion', component: ColeccionHistoriaComponent },
  { path: 'historia', component: HistoriaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
