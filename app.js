// importar as configurações do servidor

var app = require('./config/server');

// parametrizar a porta de escuta

var server = app.listen(80, function(){
    console.log("servidor online");
})

var io = require('socket.io').listen(server);

// Criar a conexão com o web socket
io.on('connection', function(socket){
    console.log('Usuario conectou')


    socket.on('disconnect', function(socket){
        console.log('usuario desconectou')
    })
})