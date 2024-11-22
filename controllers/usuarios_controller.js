const {Fabrica_Usuario}= require('../models/model_usuario')
const {GerenciarUsuarios} = require('../models/crud/model_user_crud')


const criarUsuario = function(req, res) {

    //O tipo do dado recebido guerreiro tem que ser numero e forma de strings

    const {nome, login, senha, tipo} = req.body
    
    const fabrica = new Fabrica_Usuario
    
    const resp = fabrica.criarTipoUser(nome, login, senha, tipo)
    res.status(200).json(resp)

}

const alterarTipoUser = function (req, res) {
    
    const fabrica = new Fabrica_Usuario
    const gerenciarUser = new GerenciarUsuarios

    const array_objeto_user = []

    let userTemp = gerenciarUser.getAllUsers()
    userTemp.map((x) => {
        
        array_objeto_user.push(fabrica.criarTipoUser(x.nome, x.login, x.senha, x.tipo))
    })



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


module.exports = {criarUsuario, autenticarUser, returnAllUser, consultarUsuario}

