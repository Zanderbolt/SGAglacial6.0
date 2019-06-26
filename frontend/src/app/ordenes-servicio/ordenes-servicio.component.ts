import { Component, OnInit } from '@angular/core';
import { OrdenServicio } from '../models/orden-servicio';
import { OrdenServicioService } from '../services/orden-servicio.service';

@Component({
  selector: 'app-ordenes-servicio',
  templateUrl: './ordenes-servicio.component.html',
  styleUrls: ['./ordenes-servicio.component.css']
})
export class OrdenesServicioComponent implements OnInit {

  mostrarAgregarOrden: boolean = false;
  mostrarBuscarOrdenes: boolean = false;

  constructor(public ordenServicioService: OrdenServicioService) { }

  ngOnInit() {
  }

  public toggleAgregarOrden() {
    this.mostrarAgregarOrden = true;
    this.mostrarBuscarOrdenes = false;
  }

  public toggleBuscarOrdenes() {
    this.ordenServicioService.buscarOrdenesServicio()
    .subscribe(res => this.ordenServicioService.ordenes_servicio = res as OrdenServicio[])
    this.mostrarAgregarOrden = false;
    this.mostrarBuscarOrdenes = true;
  }

}
