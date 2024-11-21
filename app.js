const express = require('express')
const app = express()
app.use(express.json())

const criarUsuario = require('./routes/rota_users')

app.use('/', criarUsuario)

app.listen(3000, () => {
    
})