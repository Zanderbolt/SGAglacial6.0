import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-orden-servicio',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css', '../ordenes-servicio.component.css']
})
export class SearchOrdenServicioComponent implements OnInit {
  busquedaSeleccionada : boolean[] = [true, false, false, false] //Nada, Nombre, Correo Placas

  constructor() { }

  ngOnInit() {
  }

  cambiarBusquedaSeleccionada(opcion: number) {    
    for (let i = 0; i < this.busquedaSeleccionada.length ; i++)
    {
      i == opcion ? this.busquedaSeleccionada[i] = true : this.busquedaSeleccionada[i] = false          
    }
    console.log(this.busquedaSeleccionada);
  }


}
