const express = require('express')
const route = express.Router()


const {criarUsuario} = require('../controllers/usuarios_controller')
const {returnAllUser} = require('../controllers/usuarios_controller')
const {consultarUsuario} = require('../controllers/usuarios_controller')
const {alterarTipoUser} = require('../controllers/usuarios_controller')
const {excluirUser} = require('../controllers/usuarios_controller')

route.post('/criarUsuario', criarUsuario)
route.get('/returnAllUsers', returnAllUser)
route.get('/consultarUsuario', consultarUsuario)
route.put ('/alterarTipoUsuario', alterarTipoUser)
route.delete ('/excluirUser', excluirUser)

module.exports = route


