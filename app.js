const express = require('express')
const app = express()

app.use(express.json())

const usuarios = require('./routes/rota_users')
const hoteis = require('./routes/rotal_hotel')

app.use('/', usuarios)
app.use('/', hoteis)

app.listen(3000, () => {
    
})