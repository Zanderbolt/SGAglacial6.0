export class Cliente {

    constructor(
        _id = '', nombre_razon_social = '' , domicilio = '', ciudad = '',
        colonia = '', cp = '', nombre_contacto = '', correo_electronico = '',
        celular = '', RFC = '', telefono_oficina = '',
    ) {
        this._id = _id;
        this.nombre_razon_social = nombre_razon_social;
        this.domicilio = domicilio;
        this.ciudad = ciudad;
        this.colonia = colonia;
        this.cp = cp;
        this.nombre_contacto = nombre_contacto;
        this.correo_electronico = correo_electronico;
        this.celular = celular;
        this.RFC = RFC;
        this.telefono_oficina = telefono_oficina;
    }
    _id: string;
    nombre_razon_social: string;
    domicilio: string;
    ciudad: string;
    colonia: string;
    cp: string;
    nombre_contacto: string;
    correo_electronico: string;
    celular: string;
    RFC: string;
    telefono_oficina: string;
  
}
