const {Fabrica_Usuario}= require('../models/usuario.model')
const {GerenciarUsuarios} = require('../models/banco.usuario')
const {GerenciarHotel} = require('../models/banco.hotel')


const criarUsuario = function(req, res) {

    //O tipo do dado recebido guerreiro tem que ser numero e forma de strings

    const {nome, login, senha, tipo} = req.body
    
    const fabrica = new Fabrica_Usuario
    
    const resp = fabrica.criarTipoUser(nome, login, senha, tipo)
    res.status(200).json(resp)

}

const bucarHotelUsuario = async function(req, res) {

    const gerenciarHotel = new GerenciarHotel
    const {id} = req.body

    const hotels = await gerenciarHotel.consultarUserHotel(id)
    console.log(hotels)

    res.status(200).json(hotels)

}

const alterarTipoUser =  async function (req, res) {
    
    const gerenciarUser = new GerenciarUsuarios
    const {nome, tipo} = req.params

    let userTemp = await gerenciarUser.consultarUsuario(nome)
    
    if(!userTemp) {
        console.log('Usuário não encontrado guerreiro!')
    }else
    {
        gerenciarUser.alterarUsuario(tipo, userTemp[0].id)
        res.status(200).json(userTemp[0])
    }


}

const excluirUser = async function (req, res){

    
    const gerenciarUser = new GerenciarUsuarios
    const {id} = req.params

    const validacao = await gerenciarUser.excluirUsuario(id)
    res.status(200).json(validacao)
    
}

const returnAllUser = function(req, res) {

    const gerenciarUser = new GerenciarUsuarios
    let arrayUser = gerenciarUser.getAllUsers()
    res.status(200).json(arrayUser)

}


const consultarUsuario = async function (req, res) {

    try {
        const { nome } = req.params

        const gerenciarUser = new GerenciarUsuarios()

        const user = await gerenciarUser.consultarUsuario(nome)

        console.log(user); 

        res.status(200).json(user); 

    } catch (err) {

        console.error('Erro ao consultar usuário:', err.message)

        res.status(500).json({ error: 'Erro ao consultar usuário.' })

    }
}

const autenticarUsuario = async function (req, res) {

    
    const gerenciarUser = new GerenciarUsuarios()
    const {login, senha} = req.body

    const validacao = await gerenciarUser.autenticarUser(login, senha)

    res.json(validacao)
    
}


module.exports = {criarUsuario, autenticarUser, returnAllUser, consultarUsuario, alterarTipoUser, excluirUser, bucarHotelUsuario, autenticarUsuario}

