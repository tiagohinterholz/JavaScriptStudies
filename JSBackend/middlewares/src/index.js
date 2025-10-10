const express = require('express')
const uploadMiddlewares = require('./middlewares/upload-middleware')

const app = express()

app.use(express.static('public'))

app.post('/upload', uploadMiddlewares.single('image'), (request, response) => {
    console.log(request.file, request.body)
    response.json({message: 'Aqruivo salvo com sucesso!'})
})

const PORT = 3000
app.listen(PORT, () => console.log('Servidor Iniciado!'))