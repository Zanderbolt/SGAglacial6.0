const express = require('express');
const router = express.Router();

const clientesController = require('../controllers/clientes.controller');

router.get('/', clientesController.getClientes);
router.post('/', clientesController.createCliente);
router.get('/buscar/:id', clientesController.getCliente);
router.get('/:nombre_razon_social/', clientesController.getClienteByNombre);
router.put('/:id', clientesController.updateCliente);
router.delete('/:id', clientesController.deleteCliente);
module.exports = router;
