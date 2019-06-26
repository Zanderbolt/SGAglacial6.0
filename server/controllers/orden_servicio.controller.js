const Orden_servicio = require('../models/orden_servicio')
const orden_servicioController = {};

// SELECT ALL
orden_servicioController.getOrdenesServicio = async (req, res) => {
    const orden_servicio = await Orden_servicio.find();
    res.json(orden_servicio);
};

// CREATE ORDEN
orden_servicioController.createOrden_servicio = async (req, res) => {
    const orden_servicio = new Orden_servicio(req.body)
    await orden_servicio.save();
    res.json(orden_servicio);
}

module.exports = orden_servicioController;