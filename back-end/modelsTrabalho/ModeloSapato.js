const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    nomeFabrica:{type: String, required: true},
    referencia:{type: String, required: true}, 
    valor:{type: Number, required: true},
   

})

module.exports = mongoose.model('ModeloSapato', esquema, 'modelos_sapatos')