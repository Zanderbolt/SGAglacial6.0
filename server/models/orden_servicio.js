const mongoose = require('mongoose');
const { Schema } = mongoose;

// const Cliente = require('../models/clientes')




const Ordenes_servicioSchema = new Schema({
    cliente: { type: {} },
    vehiculo: { type: {} },
    detalles_servicio: { type: [] },
    con_garantia: { type: Boolean },
    con_iva: {type: Boolean},
    con_descuento: {type: Boolean},
    forma_pago: {type: String},
    duracion_garantia: {type: String},
    subtotal: {type: Number},
    descuento: {type: Number},
    IVA: {type: Number},
    total: {type: Number},
    // vehiculo: {type: Vehiculos, required: true },
})

module.exports = mongoose.model('Ordenes_servicio', Ordenes_servicioSchema);