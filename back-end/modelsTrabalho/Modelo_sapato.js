const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    referencia:{type: String, required: true},
    qtd:{type: Number, required: true},
    numero_ficha:{type: Number, required: true}, 
    valor:{type: Number, required: true},
   

})

module.exports = mongoose.model('Modelo_sapato', esquema, 'modelos_sapatos')