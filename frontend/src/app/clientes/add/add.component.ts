import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from '../../services/cliente.service'
import { NgForm } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css', '../clientes.component.css']
})
export class AddComponent implements OnInit {

  constructor(public clientesService: ClienteService, private toastr: ToastrService) { }

  cliente: Cliente = {
    _id: '',
    nombre_razon_social: '',
    domicilio: '',
    ciudad: '',
    colonia: '',
    cp: '',
    nombre_contacto: '',
    correo_electronico: '',
    celular: '',
    RFC: '',
    telefono_oficina: ''
  };

  ngOnInit() {
    this.toastr.success("hola")
  }

  addCliente(form: NgForm) {
    this.clientesService.addCliente(form.value)
    .subscribe(res => {
      console.log(res)
      this.resetForm(form);
    })
    

  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();      
    }
  }

}
