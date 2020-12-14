const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    qtdPares:{type: Number, required: true},
    plano:{type: Number, required: true},
    modeloSapato:{type: mongoose.ObjectId, ref:'ModeloSapato', required: true},
    diaRecebimento:{type: String, required: true},
    numeroFicha:{type: Number, required: true},
})

module.exports = mongoose.model('ProducaoRecebida', esquema, 'producoes_recebidas')