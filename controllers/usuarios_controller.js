const {Fabrica_Usuario}= require('../models/model_usuario')
const {GerenciarUsuarios} = require('../models/crud/model_user_crud')


const criarUsuario = function(req, res) {

    //O tipo do dado recebido guerreiro tem que ser numero e forma de strings

    const {nome, login, senha, tipo} = req.body
    
    const fabrica = new Fabrica_Usuario
    
    const resp = fabrica.criarTipoUser(nome, login, senha, tipo)
    res.status(200).json(resp)

}

const alterarTipoUser =  async function (req, res) {
    
    const gerenciarUser = new GerenciarUsuarios
    const {nome, tipo} = req.body

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
    const {nome, login} = req.body

    const validacao = await gerenciarUser.excluirUsuario(nome, login)
    res.status(200).json(validacao)
    
}

const returnAllUser = function(req, res) {

    const gerenciarUser = new GerenciarUsuarios
    let arrayUser = gerenciarUser.getAllUsers()
    res.status(200).json(arrayUser)

}
const autenticarUser = function(req, res) {
    const {email, senha} = req.body
}

const consultarUsuario = async function (req, res) {

    try {
        const { nome } = req.body; 

        const gerenciarUser = new GerenciarUsuarios(); 

        const user = await gerenciarUser.consultarUsuario(nome);

        console.log(user); 

        res.status(200).json(user); 

    } catch (err) {

        console.error('Erro ao consultar usuário:', err.message);

        res.status(500).json({ error: 'Erro ao consultar usuário.' }); 

    }
};


module.exports = {criarUsuario, autenticarUser, returnAllUser, consultarUsuario, alterarTipoUser, excluirUser}

