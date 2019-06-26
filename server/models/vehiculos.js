const mongoose = require('mongoose');
const { Schema } = mongoose;

const VehiculosSchema = new Schema({
    // _id: {type: String, required: true },
    area: {type: String, required: false },
    responsable: {type: String, required: false },
    usuario: {type: String, required: false },
    marca: {type: String, required: false },
    modelo: {type: String, required: false },
    placas: {type: String, required: false },
    ano: {type: String, required: false },
    kms: {type: String, required: false },
    color: {type: String, required: false },
    numero_serie: {type: String, required: false }
})

module.exports = mongoose.model('Vehiculos', VehiculosSchema);