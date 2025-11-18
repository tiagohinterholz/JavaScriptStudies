const express = require('express')
const usersRouter = require('./routes/user')


const app = express()
app.use(express.json())
app.use('/api/users', usersRouter)

app.listen(3000, () => console.log('Servidor Iniciado!'))