import { Component, OnInit } from '@angular/core';
import { OrdenServicioService } from '../../services/orden-servicio.service'
import { OrdenServicio } from 'src/app/models/orden-servicio';

@Component({
  selector: 'app-search-orden-servicio',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css', '../ordenes-servicio.component.css']
})
export class SearchOrdenServicioComponent implements OnInit {
  busquedaSeleccionada : boolean[] = [true, false, false, false] //Nada, Nombre, Correo Placas

  constructor(public ordenServicioService: OrdenServicioService) { }

  ngOnInit() {
    this.ordenServicioService.buscarOrdenesServicio()
    .subscribe(res => this.ordenServicioService.ordenes_servicio = res as OrdenServicio[])    
  }

  cambiarBusquedaSeleccionada(opcion: number) {    
    for (let i = 0; i < this.busquedaSeleccionada.length ; i++)
    {
      i == opcion ? this.busquedaSeleccionada[i] = true : this.busquedaSeleccionada[i] = false          
    }
    console.log(this.busquedaSeleccionada);
  }




}
