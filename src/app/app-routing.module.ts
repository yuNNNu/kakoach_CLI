import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PlanesComponent } from './pages/planes/planes.component';
const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'planes', component: PlanesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
