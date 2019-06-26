import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { OrdenServicio } from '../models/orden-servicio';

import { Vehiculo } from '../models/vehiculo';
import { Cliente } from '../models/cliente';


@Injectable({
  providedIn: 'root'
})
export class OrdenServicioService {

  selectedOrden_servicio: OrdenServicio;
  readonly URL_API = 'http://localhost:3000/api/orden_servicio';
  ordenes_servicio: OrdenServicio[];

  constructor(public http: HttpClient) {
    this.selectedOrden_servicio = new OrdenServicio;
   }

   guardarOrdenServicio(ordenServicio: OrdenServicio) {
    return this.http.post(this.URL_API, ordenServicio);
  }

  buscarOrdenesServicio() {
    return this.http.get(this.URL_API);
  }
}
