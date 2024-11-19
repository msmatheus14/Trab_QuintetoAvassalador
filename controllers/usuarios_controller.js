const {Fabrica_Usuario}= require('../models/model_usuario')
const {autenticar} = require("../models/model_usuario")

const criarUsuario = function(req, res) {


    //O tipo do dado recebido guerreiro tem que ser numero e forma de strings

    const {nome, email, senha, tipo} = req.body

    let user = fabrica_user.criarTipoUser(nome, email, senha, tipo)
    res.status(200).send('Usuario Criado com Sucesso!')

    

}

const autenticar = function(req, res) {

}

