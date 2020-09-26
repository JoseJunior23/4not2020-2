<<<<<<< HEAD
const mongoose = require('mongoose');

module.exports = uri =>{
=======
const mongoose = require('mongoose')

module.exports = uri => {
>>>>>>> upstream/master
    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
<<<<<<< HEAD
    });
=======
    })
>>>>>>> upstream/master

    mongoose.connection.on('connected', () =>
        console.log('==> Mongoose! conectado com sucesso ao servidor')
    )
<<<<<<< HEAD
    
=======

>>>>>>> upstream/master
    mongoose.connection.on('disconnected', () =>
        console.log('==> Mongoose! desconectado do servidor')
    )

    // Capturamos um sinal de encerramento (SIGINT), Ctrl+C
    process.on('SIGINT', () => 
        mongoose.connection.close(() => {
<<<<<<< HEAD
            console.log('* Mongoose! Desconectado pelo término da aplicação');
            // 0 indica que a finalização ocorreu sem erros 
            process.exit(0);
      })
   )
=======
            console.log('==> Mongoose! Desconectado pelo término da aplicação')
            // 0 indica que a finalização ocorreu sem erros 
            process.exit(0);
        })
    )
>>>>>>> upstream/master
}