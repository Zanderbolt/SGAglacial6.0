import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { Cliente } from 'src/app/models/cliente';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css', '../clientes.component.css']
})
export class SearchComponent implements OnInit {
  busquedaSeleccionada : boolean[] = [true, false, false, false] //Nada, Nombre, Correo Placas
  constructor(public clientesService: ClienteService) { }

  ngOnInit() {
    this.getClientes();
  }

  cambiarBusquedaSeleccionada(opcion: number) {    
    for (let i = 0; i < this.busquedaSeleccionada.length ; i++)
    {
      i == opcion ? this.busquedaSeleccionada[i] = true : this.busquedaSeleccionada[i] = false          
    }
  }

  getClientes() {
    this.clientesService.getClientes().subscribe(res => {
      this.clientesService.clientes = res as Cliente[];
      console.log(res)
    })
  }

}
