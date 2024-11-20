const express = require('express')
const app = express()
app.use(express.json())

const criarUsuario = require('./routes/criarUsuario_route')

app.use('/', criarUsuario)

app.listen(3000, () => {
    
})