const mongoose = require('mongoose');

const URI = 'mongodb+srv://root:123@sgaglacial-apara.mongodb.net/test?retryWrites=true&w=majority'


mongoose.connect(URI)
    .then( db => console.log('DB is Connecteddd'))
    .catch( error => console.log(error));

module.exports = mongoose;