const express = require('express')
const app = express()

app.use(express.json())

const usuarios = require('./routes/rota.users')
const hoteis = require('./routes/rotal.hotel')

app.use('/', usuarios)
app.use('/', hoteis)

app.listen(3000, () => {
    
})