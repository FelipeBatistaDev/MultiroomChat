module.exports.iniciaChat = function(application, req, res){
    
    var dadosForm = req.body;

    req.assert('apelido', 'O campo apelido é obrigatorio').notEmpty();
    req.assert('apelido', 'O campo apelido aceita apenas 3 a 15 caracteres').len(3, 15);


    var erros = req.validationErrors();


    if(erros){
        res.render("index",{validacao: erros});
        return;
    }

    res.render('chat')
}

