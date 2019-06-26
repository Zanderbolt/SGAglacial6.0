import { Component, OnInit } from '@angular/core';
import { OrdenServicioService } from '../../services/orden-servicio.service'
import { OrdenServicio } from 'src/app/models/orden-servicio';
import { PrintService } from '../../services/print.service';


@Component({
  selector: 'app-search-orden-servicio',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css', '../ordenes-servicio.component.css']
})
export class SearchOrdenServicioComponent implements OnInit {
  busquedaSeleccionada : boolean[] = [true, false, false, false] //Nada, Nombre, Correo Placas

  constructor(public ordenServicioService: OrdenServicioService,
              public printService: PrintService) { }

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

  onPrintInvoice(orden_servicio: OrdenServicio) {
    this.ordenServicioService.buscarOrdenServicio(orden_servicio._id)
    .subscribe(res => this.ordenServicioService.selectedOrden_servicio = res as OrdenServicio)
    
    const invoiceIds = [orden_servicio._id];
    setTimeout(() => this.printService
    .printDocument('invoice', invoiceIds), 1000)    
  }

}
