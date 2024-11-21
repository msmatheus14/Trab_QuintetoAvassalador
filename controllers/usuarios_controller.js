const {Fabrica_Usuario}= require('../models/model_usuario')
const {GerenciarUsuarios} = require('../models/crud/model_user_crud')


const criarUsuario = function(req, res) {

    //O tipo do dado recebido guerreiro tem que ser numero e forma de strings

    const {nome, login, senha, tipo} = req.body
    
    const fabrica = new Fabrica_Usuario
    
    const resp = fabrica.criarTipoUser(nome, login, senha, tipo)
    res.status(200).json(resp)

}

const returnAllUser = function(req, res) {

    const gerenciarUser = new GerenciarUsuarios

    let arrayUser = gerenciarUser.getAllUsers()
    res.status(200).json(arrayUser)

}
const autenticarUser = function(req, res) {
    const {email, senha} = req.body
}


module.exports = {criarUsuario, autenticarUser, returnAllUser}

