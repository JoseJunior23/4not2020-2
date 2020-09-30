const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    nome:{type: String, required: true},
    idade:{type: Number, required: true},
    cpf:{type: String, required: true, index: {unique: true}},
    rg:{type: String, required: true, index: {unique: true}},
    telefone:{type: String, required: true}, 
    endereco:{type: String, required: true}, 
    estado_civil:{type: String, required: true },
    qtd_filho:{type: Number, required: true },
    funcao:{type: String, required: true}

})

module.exports = mongoose.model('Funcionario', esquema, 'funcionarios')