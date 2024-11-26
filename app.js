const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())

const usuarios = require('./routes/rota.users')
const hoteis = require('./routes/rotal.hotel')

app.use('/', usuarios)
app.use('/', hoteis)

app.listen(3000, () => {
    
})