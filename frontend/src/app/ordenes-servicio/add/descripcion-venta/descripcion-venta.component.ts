import { Component, OnInit, OnChanges } from '@angular/core';
import { OrdenServicioService } from '../../../services/orden-servicio.service'
import { VehiculoService } from '../../../services/vehiculo.service'
import { ClienteService } from '../../../services/cliente.service'

import { OrdenServicio } from '../../../models/orden-servicio'
import { DetallesServicio } from '../../../models/detalles-servicio'
import { Cliente } from '../../../models/cliente'
import { Vehiculo } from '../../../models/vehiculo'

@Component({
  selector: 'app-descripcion-venta',
  templateUrl: './descripcion-venta.component.html',
  styleUrls: ['./descripcion-venta.component.css', '../add.component.css', '../../ordenes-servicio.component.css']
})
export class DescripcionVentaComponent implements OnInit {
  busquedaSeleccionada: boolean[] = [true, false] //Contado, Crédito,

  serviciosAgregados: DetallesServicio = {
    cantidad: 0,
    descripcion: '',
    precio: 0,
    total: 0
  };

  marked = false;
  theCheckbox = false;


  // MODELO DE ORDEN
  orden_servicio: OrdenServicio = {
    cliente: this.clienteService.selectedCliente,
    vehiculo: this.vehiculoService.selectedVehiculo,
    detalles_servicio: [],
    con_garantia: false,
    con_iva: false,
    con_descuento: false,
    forma_pago: 'contado',
    duracion_garantia: '3 (Tres) Meses en Servicio Realizado',
    subtotal: 0,
    descuento: 0,
    IVA: 0,
    total: 0,
  }

  agregados: DetallesServicio[] = []

  constructor(
    public clienteService: ClienteService,
    public vehiculoService: VehiculoService,
    public ordenServicioService: OrdenServicioService) { }



  ngOnInit() {

  }

  cambiarBusquedaSeleccionadaFormaPago(opcion: string) {
    switch (opcion) {
      case "contado":
        for (let i = 0; i < this.busquedaSeleccionada.length; i++) { i == 0 ? this.busquedaSeleccionada[i] = true : this.busquedaSeleccionada[i] = false }
        break;
      case "credito":
        for (let i = 0; i < this.busquedaSeleccionada.length; i++) { i == 1 ? this.busquedaSeleccionada[i] = true : this.busquedaSeleccionada[i] = false }
        break;
    }
    this.orden_servicio.forma_pago = opcion;
  }

  cambiarBusquedaSeleccionadaDuracionGarantia(opcion: string) {
    switch (opcion) {
      case "3":
        this.orden_servicio.duracion_garantia = "3 (Tres) Meses en Servicio Realizado";
        break;
      case "6":
        this.orden_servicio.duracion_garantia = "6 (seis) Meses en Servicio Realizado";
        break;
      case "9":
        this.orden_servicio.duracion_garantia = "9 (Nueve) Meses en Servicio Realizado";
        break;
    }
    console.log(this.orden_servicio.duracion_garantia);
  }


  agregarNuevoServicio() {
    this.serviciosAgregados.total = this.serviciosAgregados.cantidad * this.serviciosAgregados.precio;
    this.agregados.push(this.serviciosAgregados);
    this.orden_servicio.detalles_servicio = this.agregados
    this.orden_servicio.subtotal += this.serviciosAgregados.total;
    // this.orden_servicio.IVA += this.serviciosAgregados.total * .16;
    this.orden_servicio.total = this.orden_servicio.subtotal + this.orden_servicio.IVA - this.orden_servicio.descuento
    this.serviciosAgregados = {
      'cantidad': 0,
      'descripcion': '',
      'precio': 0,
      'total': 0,
    }
    this.actualizarCantidades();
  }

  eliminarNuevoServicio(index: number) {
    this.orden_servicio.subtotal -= this.agregados[index].total;
    this.orden_servicio.total = this.orden_servicio.subtotal + this.orden_servicio.IVA - this.orden_servicio.descuento
    this.agregados.splice(index, 1);
    this.actualizarCantidades();
  }

  actualizarCantidades() {
    this.orden_servicio.con_iva ? this.orden_servicio.IVA = this.orden_servicio.subtotal * .16 : this.orden_servicio.IVA = 0
    this.orden_servicio.con_iva ? this.orden_servicio.descuento = this.orden_servicio.subtotal * .10 : this.orden_servicio.descuento = 0
    this.orden_servicio.total = this.orden_servicio.subtotal + this.orden_servicio.IVA - this.orden_servicio.descuento
  }

  toggleGarantia(e) {
    e.target.checked ? this.orden_servicio.total = 0 : this.orden_servicio.total = this.orden_servicio.subtotal + this.orden_servicio.IVA - this.orden_servicio.descuento
  }

  toggleIVA(e) {
    e.target.checked ? this.orden_servicio.IVA = this.orden_servicio.subtotal * .16 : this.orden_servicio.IVA = 0
    this.orden_servicio.total = this.orden_servicio.subtotal + this.orden_servicio.IVA - this.orden_servicio.descuento
  }

  toggleDescuento(e) {
    e.target.checked ? this.orden_servicio.descuento = this.orden_servicio.subtotal * .10 : this.orden_servicio.descuento = 0
    this.orden_servicio.total = this.orden_servicio.subtotal + this.orden_servicio.IVA - this.orden_servicio.descuento
  }

  test() {
    this.orden_servicio.cliente = this.clienteService.selectedCliente
    this.orden_servicio.vehiculo = this.vehiculoService.selectedVehiculo
    this.ordenServicioService.guardarOrdenServicio(this.orden_servicio)
    .subscribe(res => console.log(res));
  }

}
