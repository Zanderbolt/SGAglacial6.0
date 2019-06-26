import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { ToastrModule } from 'ngx-toastr'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// AutoFIll
import {MatButtonModule, 
  MatCheckboxModule,
  MatAutocompleteModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// fontAwesomeModule
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons';
import { HomeComponent } from './home/home.component';

// Clientes
import { ClientesComponent } from './clientes/clientes.component';
import { AddComponent } from './clientes/add/add.component';
import { SearchComponent } from './clientes/search/search.component';

// OrdenesServicio
import { OrdenesServicioComponent } from './ordenes-servicio/ordenes-servicio.component'
import { AddComponentOrdenServicio } from './ordenes-servicio/add/add.component'
import { SearchOrdenServicioComponent } from './ordenes-servicio/search/search.component';
import { DescripcionVentaComponent } from './ordenes-servicio/add/descripcion-venta/descripcion-venta.component';
import { PrintLayoutComponent } from './components/print-layout/print-layout.component';
import { InvoiceComponent } from './components/invoice/invoice.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClientesComponent,
    AddComponent,
    SearchComponent,
    OrdenesServicioComponent,
    AddComponentOrdenServicio,
    SearchOrdenServicioComponent,
    DescripcionVentaComponent,
    PrintLayoutComponent,
    InvoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    MatButtonModule, MatCheckboxModule,
    MatAutocompleteModule, MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    MatButtonModule, MatCheckboxModule,
    MatAutocompleteModule, MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor() {
    // Add an icon to the library for convenient access in other components
    library.add(fas, far)
  }
}
