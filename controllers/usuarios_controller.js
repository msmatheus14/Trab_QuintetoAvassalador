const {Fabrica_Usuario}= require('../models/model_usuario')
const {autenticar} = require("../models/model_usuario")

const criarUsuario = function(req, res) {


    //O tipo do dado recebido guerreiro tem que ser numero e forma de strings

    const {nome, email, senha, tipo} = req.body

    const user = fabrica_user.criarTipoUser(tipo)
    user.criarUsuario()
    


}

const autenticar = function(req, res) {

}

