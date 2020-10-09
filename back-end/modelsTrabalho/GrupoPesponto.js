const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    nome_grupo:{type: String, required: true},
    qtd_funcionarios:{type: Number, required: true},
    nome_funcionarios:{type: mongoose.ObjectId, ref:'Funcionario', required: true},
    producao:{type: mongoose.ObjectId, ref:'ProducaoRecebida', required: true},
    qtd_insumoProducao:{type: mongoose.ObjectId, ref: 'Insumo', required: true},
    valor_par:{type: Number, required: true}

})

module.exports = mongoose.model('GrupoPesponto', esquema, 'grupos_pesponto')