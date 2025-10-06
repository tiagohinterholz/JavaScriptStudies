const express = require('express')
const gamesController = require('./controllers/games-controller')
const app = express()
app.use(express.json())

app.get('/', (request, response) => {
    response.json({message: 'Hello, World!'})
})
app.get('/games', gamesController.index)
app.get('/games/:id', gamesController.show)

app.post('/games', gamesController.save)
app.post('/games/:id/genres', gamesController.addGenre)

app.put('/games/:id', gamesController.update)

app.delete('/games/:id', gamesController.delete)
app.delete('/games/:id/genres/:name', gamesController.removeGenre)

const PORT = 3000
app.listen(PORT, () => console.log("Servidor Iniciado!"))