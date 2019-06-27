import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SucursalService {
  selectedSucursal = '';
  selectedUsuario = '';
  usuarioRegistrado: boolean;

  constructor() { }


  validarUsuario(codigoUsuario: string, codigo_sucursal: string, password: string) {
    this.usuarioRegistrado = false;
    this.selectedUsuario = '';
    this.selectedSucursal = '';
    switch (codigo_sucursal) {
      case "GlacialColima":
        password == "GLACIAL00" ? this.usuarioRegistrado = true : this.usuarioRegistrado = false;
        this.selectedSucursal = "COLIMA"
        break;
      case "GlacialVilla":
        password == "GLACIAL01" ? this.usuarioRegistrado = true : this.usuarioRegistrado = false;
        this.selectedSucursal = "VILLA"
        break;
      case "GlacialManzanillo":
        password == "GLACIAL02" ? this.usuarioRegistrado = true : this.usuarioRegistrado = false;
        this.selectedSucursal = "MANZANILLO"
        break;
      case "GlacialMina":
        password == "GLACIAL03" ? this.usuarioRegistrado = true : this.usuarioRegistrado = false;
        this.selectedSucursal = "MINA"
        break;
      default:
        this.usuarioRegistrado = false;
        break;
    }
    switch (codigoUsuario) {
      case "G1800":
        this.selectedUsuario = "RAFAEL"
        break;
      case "G1801":
        this.selectedUsuario = "ESTER"
        break;
      case "G1802":
        this.selectedUsuario = "ARACELI"
        break;
      case "G1803":
        this.selectedUsuario = "CARLOS"
        break;
      case "G1804":
        this.selectedUsuario = "BLANCA"
        break;
      case "G1805":
        this.selectedUsuario = "X"
        break;
      case "G1806":
        this.selectedUsuario = "Y"
        break;
      case "G1807":
        this.selectedUsuario = "Z"
        break;
      default:
        this.usuarioRegistrado = false;
        break;
    }
    return this.usuarioRegistrado;
  }

  cerrarSesion() {
    this.usuarioRegistrado = false;
    this.selectedUsuario = '';
    this.selectedSucursal = '';
  }

}

