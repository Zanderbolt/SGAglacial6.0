import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  selectedCliente: Cliente;
  readonly URL_API = 'http://localhost:3000/api/clientes';
  clientes: Cliente[];

  constructor(public http: HttpClient) { 
    this.selectedCliente = new Cliente;
  }

  getClientes() {
    return this.http.get(this.URL_API);
  }

  getClienteByNombre(nombre_razon_social: string) {
    return this.http.get(this.URL_API + `/${nombre_razon_social}`)
  }

  addCliente(cliente: Cliente) {
    return this.http.post(this.URL_API, cliente);
  }

  putCliente(cliente: Cliente) {
    return this.http.put(this.URL_API + `/${cliente._id}`, cliente);
  }

  deleteCliente(id: string) {
    return this.http.delete(this.URL_API + `/${id}`);
  }
}
