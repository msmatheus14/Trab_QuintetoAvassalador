const {Fabrica_Usuario}= require('../models/usuario.model')
const {GerenciarUsuarios} = require('../models/banco.usuario')
const {GerenciarHotel} = require('../models/banco.hotel')


const criarUsuario =  async function(req, res) {


    const {nome, login, senha, tipo} = req.body
    const gerenciarUser = new GerenciarUsuarios
    const fabrica = new Fabrica_Usuario
    
    const validacao =  await fabrica.criarTipoUser(nome, login, senha, tipo)
    
    if(validacao == true){
        const userTemp =  await gerenciarUser.consultarUsuario(login)
        res.status(200).json(userTemp)
    }else
    if(validacao == false) {

        res.status(404).json({erro: "Não adicionado"})

    }
    

}

const bucarHotelUsuario = async function(req, res) {

    const gerenciarHotel = new GerenciarHotel
    const {id} = req.params.id

    const hotels = await gerenciarHotel.consultarUserHotel(id)
    console.log(hotels)

    res.status(200).json(hotels)

}

const alterarTipoUser =  async function (req, res) {
    
    const gerenciarUser = new GerenciarUsuarios
    const {login, tipo} = req.body


    const validacao = await gerenciarUser.alterarUsuario(tipo, login)
    
    if(validacao == true){

        const userTemp = await gerenciarUser.consultarUsuario(login)
        res.status(200).json(userTemp)

    }
    else
    if(validacao == false)
    {
        res.status(404).json({erro: 'Problema durante a alteração de usuário no banco'})
    }


}

const excluirUser = async function (req, res){

    
    const gerenciarUser = new GerenciarUsuarios
    const {id} = req.body

    const validacao = await gerenciarUser.excluirUsuario(id)
    res.status(200).json(validacao)
    
}

const returnAllUser = function(req, res) {

    const gerenciarUser = new GerenciarUsuarios
    let arrayUser = gerenciarUser.getAllUsers()
    console.log(arrayUser)
    res.status(200).json(arrayUser)

}


const consultarUsuario = async function (req, res) {

    try {
        const { login } = req.body

        const gerenciarUser = new GerenciarUsuarios()

        const user = await gerenciarUser.consultarUsuario(login)

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


module.exports = {criarUsuario, returnAllUser, consultarUsuario, alterarTipoUser, excluirUser, bucarHotelUsuario, autenticarUsuario}

