import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClientesComponent } from './clientes/clientes.component';
import { OrdenesServicioComponent } from './ordenes-servicio/ordenes-servicio.component';
import { PrintLayoutComponent } from './components/print-layout/print-layout.component';
import { InvoiceComponent } from './components/invoice/invoice.component';

const routes: Routes = [
  {
    path: 'print',
    outlet: 'print',
    component: PrintLayoutComponent,
    children: [
      { path: 'invoice/:invoiceIds', component: InvoiceComponent }
    ]
  },
  { path: 'clientes', component: ClientesComponent },
  { path: 'ordenes-servicio', component: OrdenesServicioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
