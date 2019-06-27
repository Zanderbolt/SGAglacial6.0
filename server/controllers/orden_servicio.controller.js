const Orden_servicio = require('../models/orden_servicio')
const orden_servicioController = {};

// SELECT ALL
orden_servicioController.getOrdenesServicio = async (req, res) => {
    const orden_servicio = await Orden_servicio.find();
    res.json(orden_servicio);
};

// SELECT ONE BY ID
orden_servicioController.getOrdenServicio = async (req, res) => {
    const orden_servicio = await Orden_servicio.findById(req.params.id)
    res.json(orden_servicio);
};

// SELECT ALL By DATE
orden_servicioController.getOrdenServicioByFecha = async (req, res) => {
    const orden_servicio = await Orden_servicio.find(
        {
            fecha:
            {
                $gt: new Date(req.params.fecha_inicio),
                $lte: new Date(req.params.fecha_fin)
            }
        })
    res.json(orden_servicio);
};

// CREATE ORDEN
orden_servicioController.createOrden_servicio = async (req, res) => {
    const orden_servicio = new Orden_servicio(req.body)
    await orden_servicio.save();
    res.json(orden_servicio);
}

module.exports = orden_servicioController;