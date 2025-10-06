const express = require('express')
const playlistController = require('./controllers/playlist-controller')
const app = express()
app.use(express.json())

app.get('/playlists', playlistController.index)
app.get('/playlists/:id', playlistController.show)

app.post('/playlists', playlistController.save)
app.post('/playlists/:id/tags', playlistController.addTag)
app.post('/playlists/:id/music_list', playlistController.saveMusic)

app.patch('/playlists/:id', playlistController.update)
app.patch('/playlists/:id/music_list/:musicId', playlistController.updateMusic)

app.delete('/playlists/:id', playlistController.delete)
app.delete('/playlists/:id/music_list/:musicId', playlistController.deleteMusic)
app.delete('/playlists/:id/tags/:name', playlistController.removeTag)

const PORT = 3000
app.listen(PORT, () => console.log("Servidor Iniciado!"))