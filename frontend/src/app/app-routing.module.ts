import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClientesComponent } from './clientes/clientes.component';
import { OrdenesServicioComponent } from './ordenes-servicio/ordenes-servicio.component';

const routes: Routes = [
   { path: 'clientes', component: ClientesComponent },
   { path: 'ordenes-servicio', component: OrdenesServicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
