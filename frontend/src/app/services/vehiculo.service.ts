import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Vehiculo } from '../models/vehiculo';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  selectedVehiculo: Vehiculo;
  readonly URL_API = 'http://localhost:3000/api/vehiculos';
  vehiculos: Vehiculo[];

  constructor(public http: HttpClient) { 
    this.selectedVehiculo = new Vehiculo;
  }

  guardarVehiculo(vehiculo: Vehiculo) {
    return this.http.post(this.URL_API, vehiculo);
  }
}
