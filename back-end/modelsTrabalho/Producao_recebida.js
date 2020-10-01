const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    qtd_Pares:{type: Number, required: true},
    plano:{type: Number, required: true},
    fabrica:{type: String, required: true},
    diaRecebimento:{type: Date, required: true},
})

module.exports = mongoose.model('Producao_recebida', esquema, 'producoes_recebidas')