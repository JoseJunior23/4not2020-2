/*
<<<<<<< HEAD
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

const Professor = require('../models/Professor');

const controller = {};
// Operação CREATE, função novo()
controller.novo = async (req, res) => {
    //Usa os dados que chega dentro do bpdy da requisição
    //e os envia ao banco de dados para a criação de um novo objeto
   try{
        await Professor.create(req.body)
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
        let dados = await Professor.find() //Traz tudos os cursos cadastrados
        res.send(dados)
    }catch(erro){
=======

    OPERAÇÕES BÁSICAS SOBRE DADOS

    1) CREATE (criação ou inserção)
        Cria um novo objeto dentro do banco de dados

    2) RETRIEVE (recuperar ou listar)
        Obter de volta um ou mais objetos preexistentes no banco de dados

    3) UPDATE
        Atualizar os dados de um objeto preexistente no banco de dados

    4) DELETE
        Exclusão de um objeto do banco de dados

    (C)reate + (R)etrieve + (U)pdate + (D)elete = sigla CRUD

    ============================================================

    Verbos do protocolo HTTP

    Verbo                   Operação
    POST                    CREATE
    GET                     RETRIEVE
    PUT                     UPDATE
    DELETE                  DELETE

*/

// Controller é um conjunto de funções associadas às operações sobre dados

const Professor = require('../models/Professor')

const controller = {}   // Objeto vazio

// Operação CREATE, função novo()
controller.novo = async (req, res) => {
    // Usa os dados que chegam dentro do body da requisição
    // e os envia o BD para a criação de um novo objeto
    try {
        await Professor.create(req.body)
        // HTTP 201: Created
        res.status(201).end()
    }
    catch(erro) {
        console.log(erro)
        // HTTP 500: Internal Server Error
        res.status(500).send(erro)
    }
}

// Operação RETRIEVE (all), função listar()
controller.listar = async (req, res) => {
    try {
        let dados = await Professor.find() // Traz todos os cursos cadastrados
        res.send(dados) // Vai com status HTTP 200: OK
    }
    catch(erro) {
>>>>>>> upstream/master
        console.log(erro)
        res.status(500).send(erro)
    }
}

<<<<<<< HEAD
//Operação RETRIEVE, (one) função obterUM()
controller.obterUm = async (req, res) => {
    try{
        //capturando o parametro id da url
        const id = req.params.id
        let obj = await Professor.findById(id)

        //objeto existe e foi encontrado
        if(obj) res.send(obj)
        //não encontrado
        else res.status(404).end()
    }catch(erro) {
=======
// Operação RETRIEVE (one), função obterUm()
controller.obterUm = async (req, res) => {
    try {
        // Capturando o parâmetro id da URL
        const id = req.params.id
        let obj = await Professor.findById(id)

        // O objeto existe e foi encontrado
        if(obj) res.send(obj)       // HTTP 200
        // Não encontrado
        else res.status(404).end()  // HTTP 404: Not found
    }
    catch(erro) {
>>>>>>> upstream/master
        console.log(erro)
        res.status(500).send(erro)
    }
}

<<<<<<< HEAD
//Opreção update, função atualizar()
controller.atualizar = async (req, res) => {
    try{
        //Isolar o _id do abjeto que esta sendo alterado
        const id = req.body._id

        //Busca e substituição do conteudo do objeto
        let ret = await Professor.findByIdAndUpdate(id, req.body)

        //Se encontrou e atualizou retornamos HTTP 204 : No content
        if(ret) res.status(204).end()
        // Não encontrou o objeto para se alterado, retornamos HTTP: not found
        else res.status(404).end()
    }
    catch(erro){
=======
// Operação UPDATE, função atualizar()
controller.atualizar = async (req, res) => {
    try {
        // Isola o _id do objeto que está sendo alterado
        const id = req.body._id
        
        // Busca e substituição do conteúdo do objeto
        let ret = await Professor.findByIdAndUpdate(id, req.body)

        // Se encontrou e atualizou, retornamos HTTP 204: No content
        if(ret) res.status(204).end()
        // Não encontrou o objeto para ser alterado, retorno HTTP 404: Not found
        else res.status(404).end()
    }
    catch(erro) {
>>>>>>> upstream/master
        console.log(erro)
        res.status(500).send(erro)
    }
}

<<<<<<< HEAD
//Opreção delete função excluir()
controller.excluir = async (req, res) => {
    try{
        //isolando o id
        const id = req.body._id

        //Busca pelo id e exclusão
        let ret = await Professor.findByIdAndDelete(id)

        //Encontrou e exclui, HTTP 204: No content
        if(ret) res.status(204).end()
        //Não encontrou, HTTP 404: Not found
        else res.status(404).end()
    }
    catch(erro){
=======
// Operação DELETE, função excluir()
controller.excluir = async (req, res) => {
    try {
        // Isolando o id
        const id = req.body._id
        
        // Busca pelo id e exclusão
        let ret = await Professor.findByIdAndDelete(id)

        // Encontrou e excluiu, HTTP 204: No content
        if(ret) res.status(204).end()
        // Não encontrou, HTTP 404: Not found
        else res.status(404).end()
    }
    catch(erro) {
>>>>>>> upstream/master
        console.log(erro)
        res.status(500).send(erro)
    }
}

<<<<<<< HEAD

module.exports = controller;
=======
module.exports = controller
>>>>>>> upstream/master
