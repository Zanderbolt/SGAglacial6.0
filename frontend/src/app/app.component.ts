import { Component } from '@angular/core';
import { PrintService } from './services/print.service';
import { SucursalService } from './services/sucursal.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  show:boolean = false;
  title = 'SGAglacial';

  constructor(public printService: PrintService,
    public sucursalService: SucursalService,
    public toastr: ToastrService) { }

  onPrintInvoice() {
    const invoiceIds = ['101', '102'];
    this.printService
      .printDocument('invoice', invoiceIds);
  }

  onToggleSidebar() {
    document.getElementById("sidebar").classList.toggle('active');
    document.getElementById("working-area").classList.toggle('active');      

    if (this.show)
      this.show = false
    else if (!this.show)
      this.show = true;
  }

  cerrarSesion() {
    this.sucursalService.cerrarSesion();
    this.toastr.info("Sesión Cerrada Exitosamente");
  }

  
}

