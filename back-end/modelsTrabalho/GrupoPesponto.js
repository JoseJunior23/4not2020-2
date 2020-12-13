const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    nomeGrupo:{type: String, required: true},
    qtdFuncionarios:{type: Number, required: true},
    nomeFuncionario1:{type: mongoose.ObjectId, ref:'Funcionario', required: true},
    nomeFuncionario2:{type: mongoose.ObjectId, ref:'Funcionario', required: true},
    nomeFuncionario3:{type: mongoose.ObjectId, ref:'Funcionario', required: true},
    producao:{type: mongoose.ObjectId, ref:'ProducaoRecebida', required: true},
    valorPar:{type: Number, required: true}

})

module.exports = mongoose.model('GrupoPesponto', esquema, 'grupos_pesponto')