const mongoose = require('mongoose');
const { Schema } = mongoose;

const ClientesSchema = new Schema({
    // _id: {type: String, required: true },
    nombre_razon_social: {type: String, required: true },
    domicilio: {type: String, required: false },
    ciudad: {type: String, required: false },
    colonia: {type: String, required: false },
    cp: {type: String, required: false },
    nombre_contacto: {type: String, required: true },
    correo_electronico: {type: String, required: false },
    celular: {type: String, required: false },
    RFC: {type: String, required: false },
    telefono_oficina: {type: String, required: false }
})

module.exports = mongoose.model('Clientes', ClientesSchema);