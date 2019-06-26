import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  mostrarAgregarCliente: boolean = false;
  mostrarBuscarClientes: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  public toggleAgregarCliente() {
    this.mostrarAgregarCliente = true;
    this.mostrarBuscarClientes = false;
  }

  public toggleBuscarClientes() {
    this.mostrarAgregarCliente = false;
    this.mostrarBuscarClientes = true;
  }

}
