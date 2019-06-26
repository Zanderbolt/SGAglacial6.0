const Vehiculos = require('../models/Vehiculos')
const vehiculosController = {};

// SELECT ALL
vehiculosController.getVehiculos = async (req, res) => {
    const vehiculos = await Vehiculos.find();
    res.json(vehiculos);
};

// CREATE Vehiculo
vehiculosController.createVehiculo = async (req, res) => {
    const vehiculo = new Vehiculos(req.body)
    await vehiculo.save();
    res.json(vehiculo);
};

module.exports = vehiculosController;
