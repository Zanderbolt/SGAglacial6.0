const express = require('express');
const router = express.Router();

 const vehiculosController = require('../controllers/vehiculos.controller');
 


router.get('/', vehiculosController.getVehiculos);
router.post('/', vehiculosController.createVehiculo);
// router.post('/', vehiculosController.createVehiculo);




module.exports = router;
