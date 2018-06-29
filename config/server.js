// importações 
var express = require('express')
var consign = require('consign')
var bodyParser = require('body-parser')
var expressValidator = require('express-validator')

// iniciar o express
var app = express();


//configurar ejs
app.set('view engine', 'ejs');
app.set('views','./app/views');

//configurar os middleware
app.use(express.static('./app/public'));

app.use(bodyParser.urlencoded({extended: true}));

app.use(expressValidator());

//auto load
consign().include('app/routes')
         .then('app/models')
         .then('app/controllers')
         .into(app);


//exportar o objeto
module.exports = app;