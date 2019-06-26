const express = require('express');
const app = express();

const morgan = require('morgan')
const cors = require('cors')

const { Mongoose } = require('./database')
// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(cors({origin: 'http://localhost:4200'}))

// Routes
app.use('/api/clientes',require('./routes/clientes.routes'));
app.use('/api/vehiculos',require('./routes/vehiculos.routes'));
app.use('/api/orden_servicio',require('./routes/orden_servicio.routes'));



//Starting the server
app.listen(app.get('port'), () => {
    console.log('Server on Port ', app.get('port'))
});
