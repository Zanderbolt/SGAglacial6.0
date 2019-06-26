import { Cliente } from '../models/cliente';
import { Vehiculo } from '../models/vehiculo';
import { DetallesServicio } from '../models/detalles-servicio';

export class OrdenServicio {
    //  _id: string;
    cliente: Cliente;
    vehiculo: Vehiculo;
    detalles_servicio: DetallesServicio[];
    con_garantia: boolean;
    con_iva: boolean;
    con_descuento: boolean;
    forma_pago: string;
    duracion_garantia: string;
    subtotal: number;
    descuento: number;
    IVA: number;
    total: number;

}
