const {Fabrica_Usuario}= require('../models/model_usuario')
const {autenticar} = require("../models/model_usuario")
const {GerenciarUsuarios} = require('../models/model_usuario')



const criarUsuario = function(req, res) {


    //O tipo do dado recebido guerreiro tem que ser numero e forma de strings

    const {nome, email, senha, tipo} = req.body
    console.log(nome, email, senha, tipo)
    const gerenciar = new GerenciarUsuarios
   

    const fabrica = new Fabrica_Usuario
    
    const user = fabrica.criarTipoUser(nome, email, senha, tipo)
    res.status(200).json({

        Usuario:user

    })


    
}

const autenticarUser = function(req, res) {

}

module.exports = {criarUsuario, autenticarUser}

