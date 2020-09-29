const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    nomeGrupo:{type: String, required: true},
    qtd_funcionarios:{type: Number, required: true},
    nome_funcionarios:{type: mongoose.ObjectId, ref:'Funcionario', required: true},
    produção:{type: mongoose.ObjectId, ref:'Producao_recebida', required: true},
    valor_par:{type: Number, required: true}

})

module.exports = mongoose.model('Grupo_pesponto', esquema, 'grupos_pesponto')