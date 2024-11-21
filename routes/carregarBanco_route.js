const express = require('express')
const { carregarbanco } = require('../controllers/usuarios_controller')
const route = express.Router()




route.get('/carregarbanco', carregarbanco)


module.exports = route


