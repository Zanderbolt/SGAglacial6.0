const express = require('express');
const router = express.Router();

const orden_servicioController = require('../controllers/orden_servicio.controller');

router.get('/', orden_servicioController.getOrdenesServicio);
router.get('/:id', orden_servicioController.getOrdenServicio);
router.post('/', orden_servicioController.createOrden_servicio);
// router.get('/fechaI/:fecha_inicio/fechaF/:fecha_fin', orden_servicioController.getOrdenServicioByFecha);
router.get('/fecha/:fecha_inicio/:fecha_fin', orden_servicioController.getOrdenServicioByFecha);
// router.get('/fechaF/:fecha_fin', orden_servicioController.getOrdenServicioByFecha);

module.exports = router;
