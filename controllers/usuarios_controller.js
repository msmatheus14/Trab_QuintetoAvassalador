const {Fabrica_Usuario}= require('../models/model_usuario')
const {GerenciarUsuarios} = require('../models/model_user_crud')


const criarUsuario = function(req, res) {

    //O tipo do dado recebido guerreiro tem que ser numero e forma de strings

    const {nome, login, senha, tipo} = req.body
    
    const fabrica = new Fabrica_Usuario
    
    const resp = fabrica.criarTipoUser(nome, login, senha, tipo)
    res.status(200).json(resp)

    
}

const carregarbanco = async function(req, res) {

// Precisa Adicioanar uma função callback

    const gerenciarUsuarios = new GerenciarUsuarios
    
    try {
        // Chama o método carregarBanco para buscar os usuários
        const resultado = await gere.carregarBanco();

        if (resultado.status) {
            // Sucesso: retorna os usuários na resposta
            res.status(200).json({ usuarios: resultado.usuarios });
        } else {
            // Erro específico do método carregarBanco
            res.status(500).json({ error: resultado.error });
        }
    } catch (error) {
        // Captura erros inesperados
        console.error('Erro no controller:', error.message);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }


}

const autenticarUser = function(req, res) {
    const {email, senha} = req.body
}


module.exports = {criarUsuario, autenticarUser}

