const express = require('express')
const route = express.Router()


const {criarUsuario} = require('../controllers/usuarios.controller')
const {returnAllUser} = require('../controllers/usuarios.controller')
const {consultarUsuario} = require('../controllers/usuarios.controller')
const {alterarTipoUser} = require('../controllers/usuarios.controller')
const {excluirUser} = require('../controllers/usuarios.controller')
const {bucarHotelUsuario} = require('../controllers/usuarios.controller')
const {autenticarUsuario} = require('../controllers/usuarios.controller')

route.post('/criarUsuario', criarUsuario)
route.get('/returnAllUsers', returnAllUser)
route.get('/consultarUsuario', consultarUsuario)
route.put ('/alterarTipoUsuario', alterarTipoUser)
route.delete ('/excluirUser', excluirUser)
route.get('/findUserHotel', bucarHotelUsuario)
route.post('/autenticar', autenticarUsuario)

module.exports = route


