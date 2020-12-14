var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const db = require('./config/database')
const dbUser = process.env.DB_USER
const dbPass = process.env.DB_PASS
const dbName = process.env.DB_NAME
db(`mongodb+srv://${dbUser}:${dbPass}@cluster0.ltdpc.mongodb.net/${dbName}?retryWrites=true&w=majority`)

var app = express();

//habilita a chamada do bac-end a partir de um servidor distinto
// É necessario instalar :
//npm install cors --save
const cors = require('cors')
app.use(cors())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// rotas do trabalho
const funcionario = require('./routesTrabalho/funcionario')
app.use('/funcionario', funcionario)

const grupo_pesponto = require('./routesTrabalho/grupo_pesponto')
app.use('/grupo_pesponto', grupo_pesponto)

const insumo = require('./routesTrabalho/insumo')
app.use('/insumo', insumo)

const modelo_sapato = require('./routesTrabalho/modelo_sapato')
app.use('/modelo-sapato', modelo_sapato)

const producao_recebida = require('./routesTrabalho/producao_recebida')
app.use('/producao_recebida', producao_recebida)

module.exports = app;