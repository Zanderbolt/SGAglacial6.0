import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordenes-servicio',
  templateUrl: './ordenes-servicio.component.html',
  styleUrls: ['./ordenes-servicio.component.css']
})
export class OrdenesServicioComponent implements OnInit {

  mostrarAgregarOrden: boolean = false;
  mostrarBuscarOrdenes: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  public toggleAgregarOrden() {
    this.mostrarAgregarOrden = true;
    this.mostrarBuscarOrdenes = false;
  }

  public toggleBuscarOrdenes() {
    this.mostrarAgregarOrden = false;
    this.mostrarBuscarOrdenes = true;
  }

}
