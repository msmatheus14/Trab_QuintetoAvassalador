const express = require('express')
const route = express.Router()


const {criarUsuario} = require('../controllers/usuarios_controller')
const {returnAllUser} = require('../controllers/usuarios_controller')

route.post('/criarUsuario', criarUsuario)
route.get('/returnAllUsers', returnAllUser)

module.exports = route


