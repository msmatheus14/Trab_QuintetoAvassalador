const express = require('express')
const route = express.Router()

const {criarUsuario} = require('../controllers/usuarios_controller')


route.post('/criarUsuario', criarUsuario)


module.exports = route


