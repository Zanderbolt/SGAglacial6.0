import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { SucursalService } from '../services/sucursal.service';




@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {

  codigo_usuario: string;
  codigo_sucursal: string;
  password: string;
  constructor(
    public _router: Router,
    public toastr: ToastrService,
    public sucursalService: SucursalService,
  ) { }

  ngOnInit() {
  }

  login(form: NgForm) {

    if (this.sucursalService.validarUsuario(this.codigo_usuario, this.codigo_sucursal, this.password)) {
      this.toastr.success('Iniciando Sesión', 'Datos Correctos')
      this._router.navigate([''])
    }
    else {
      this.toastr.warning('Verificar', 'Datos Incorrectos')
    }



    // console.log(form.value);
    // if (form.valid) {

    // }

    // this.toastr.success('Usuario Registrado con éxito', 'Éxito');
    // this.resetForm(form);
  }

}
