import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PrintService } from 'src/app/services/print.service';

import { OrdenServicioService } from '../../services/orden-servicio.service'

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  invoiceIds: string[];
  invoiceDetails: Promise<any>[];
  perro: string = "perra"

  constructor(route: ActivatedRoute,
    public printService: PrintService,
    public ordenServicioService: OrdenServicioService) {
    this.invoiceIds = route.snapshot.params['invoiceIds']
      .split(',');
  }

  ngOnInit() {
    this.invoiceDetails = this.invoiceIds
      .map(id => this.getInvoiceDetails(id));
    Promise.all(this.invoiceDetails)
      .then(() => this.printService.onDataReady());
  }

  getInvoiceDetails(invoiceId) {
    // console.log(this.ordenServicioService.selectedOrden_servicio.cliente.nombre_razon_social);
    const amount = this.ordenServicioService.selectedOrden_servicio.cliente.nombre_razon_social;

    return new Promise(resolve =>
      setTimeout(() => resolve({ amount }), 1000)
    );
  }

}
