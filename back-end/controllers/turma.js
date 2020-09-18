/*
OPERAÇÕES BASICAS SOBRE DADOS

1) Create(criação ou inserção)
    cria um novo objeto dentro de um banco de dados

2)Retrieve(recuperar ou listar)
    Obter de volta um ou mais objetos preexistentes no banco de dados    

Update
    Atualiza os dados de um objeto preexistente no banco de dados

Delete
Exclusão de um objeto de banco de dados 

=========================================================================

Verbos do protocolo HTTP

verbo                      Operação
POST                       Create
GET                        Retrieve
PUT                        Update
Delete                     Delete

*/

// controller é um conjunto de funções associadas as operações sobre dados 

const Curso = require('../models/Curso');

const controller = {};
// Operação CREATE, função novo()
controller.novo = async (req, res) => {
    //Usa os dados que chega dentro do bpdy da requisição
    //e os envia ao banco de dados para a criação de um novo objeto
   try{
        await Curso.create(req.body)
        //HTTP 201: CREATED
        res.status(201).end()
    }
    catch(erro){
        console.log(erro)
        //HTTP 500: Internal server error
        res.status(500).send(erro)
    }
}   

//Operação RETRIEVE, (all) função listar()
controller.listar = async (req, res) => {
    try{
        let dados = await Curso.find() //Traz tudos os cursos cadastrados
        res.send(dados)
    }catch(erro){
        console.log(erro)
        res.status(500).send(erro)
    }
}

//Operação RETRIEVE, (one) função obterUM()
controller.obterUm = async (req, res) => {
    try{
        //capturando o parametro id da url
        const id = req.params.id
        let obj = await Curso.findById(id)

        //objeto existe e foi encontrado
        if(obj) res.send(obj)
        //não encontrado
        else res.status(404).end()
    }catch(erro) {
        console.log(erro)
        res.status(500).send(erro)
    }
}

//Opreção update, função atualizar()
controller.atualizar = async (req, res) => {
    try{
        //Isolar o _id do abjeto que esta sendo alterado
        const id = req.body._id

        //Busca e substituição do conteudo do objeto
        let ret = await Curso.findByIdAndUpdate(id, req.body)

        //Se encontrou e atualizou retornamos HTTP 204 : No content
        if(ret) res.status(204).end()
        // Não encontrou o objeto para se alterado, retornamos HTTP: not found
        else res.status(404).end()
    }
    catch(erro){
        console.log(erro)
        res.status(500).send(erro)
    }
}

//Opreção delete função excluir()
controller.excluir = async (req, res) => {
    try{
        //isolando o id
        const id = req.body._id

        //Busca pelo id e exclusão
        let ret = await Curso.findByIdAndDelete(id)

        //Encontrou e exclui, HTTP 204: No content
        if(ret) res.status(204).end()
        //Não encontrou, HTTP 404: Not found
        else res.status(404).end()
    }
    catch(erro){
        console.log(erro)
        res.status(500).send(erro)
    }
}


module.exports = controller;