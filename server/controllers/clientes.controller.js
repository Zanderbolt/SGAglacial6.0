const Clientes = require('../models/clientes')
const clientesController = {};

// SELECT ALL
clientesController.getClientes = async (req, res) => {
    const clientes = await Clientes.find();
    res.json(clientes);
};

// SELECT ALL WHERE ID
clientesController.getCliente = async (req, res) => {
    const Cliente = await Clientes.findById(req.params.id)
    res.json(Cliente);
};

// SELECT ID FROM NOMBRE
clientesController.getClienteByNombre = async (req, res) => {
    // const Cliente = await Clientes.findById(req.params.id)
    // const clientes = await Clientes.find();
    const clientes = await Clientes.find( { nombre_razon_social: req.params.nombre_razon_social})
    // res.json(clientes);

    // const clientes = await Clientes.find();
    res.json(clientes);
};

// CREATE CLIENTE
clientesController.createCliente = async (req, res) => {
    const cliente = new Clientes(req.body)
    await cliente.save();
    res.json({
        'status': 'Cliente guardado!'
    });
}

// UPDATE CLIENTE
clientesController.updateCliente = async (req, res) => {
    const { id } = req.params;
    const cliente = {
        nombre_razon_social: req.body.nombre_razon_social,
        nombre_contacto: req.body.nombre_contacto
    }
    await Clientes.findByIdAndUpdate(id, { $set: cliente }, { new: true })
    res.json('cliente actualizado');
}

// DELETE CLIENTE
clientesController.deleteCliente = async (req, res) => {
    await Clientes.findOneAndDelete(req.params.id)
    res.json({ 'status': "Empleado Eliminado" });
}

module.exports = clientesController;