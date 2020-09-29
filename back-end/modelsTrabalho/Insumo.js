const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    linha:{type: String, required: true},
    agulha:{type: String, required: true},
    cola:{type: String, required: true}
    
     
})

module.exports = mongoose.model('Insumo', esquema, 'insumos')