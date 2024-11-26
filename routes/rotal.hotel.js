const express = require('express')
const route = express.Router()

const {adicionarhotel} = require('../controllers/hotel.controller')
const {retornarTodosHotel} = require('../controllers/hotel.controller')


route.post('/adicionarHotel', adicionarhotel)
route.get('/getHotel', retornarTodosHotel)


module.exports = route


