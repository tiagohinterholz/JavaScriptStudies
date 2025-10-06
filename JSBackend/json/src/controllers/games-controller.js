const { response } = require("express")

const games = [
  { id: 1, name: 'Legend of Mana', genres: ['action-rpg'], year: 1999 },
  { id: 2, name: 'World of Warcraft', genres: ['mmorpg'], year: 2004 },
  { id: 3, name: 'Metal Gear Solid', genres: ['stealth', 'action-adventure'], year: 1998 },
  { id: 4, name: 'Sonic Adventure 2', genres: ['platformer'], year: 2001 },
  { id: 5, name: 'Age of Empires 2', genres: ['real-time-strategy'], year: 1999 }
]


module.exports = {
    index: (request, response) => {
        response.json(games)
    },
    show: (request, response) => {
        const {id} = request.params
        const game = games.find(game => game.id === +id)
        if (!game) {
            response.status(404)
            response.json({message: 'Game not found'})
        } else {
            response.json(game)
        }
    },
    save: (request, response) => {
        const {name, genres, year} = request.body
        const newGame = {
            id: Math.floor(Math.random() * 999999999),
            name: name,
            genres:genres,
            year: year
        }
        games.push(newGame)
        response.status(201)
        response.json(newGame)
    },
    update: (request, response) => {
        const {id} = request.params
        const {name, year} = request.body
        const gameIndex = games.findIndex(game => game.id === +id)
        if (gameIndex === -1) {
            return response.status(404).json({message: 'Game not found'})
        }
        if (typeof name === 'string') {
            games[gameIndex].name = name
        }
        if (typeof year === 'number') {
            games[gameIndex].year = year
        }
        response.json(games[gameIndex])
    },
    delete: (request, response) => {
        const {id} = request.params
        const gameIndex = games.findIndex(game => game.id === +id)
        if (gameIndex === -1) {
            return response.status(404).json({ message: "Game not found!" })
        }
        games.splice(gameIndex, 1)
        response.status(204).end()
    },
    addGenre: (request, response) => {
        const {id} = request.params
        const {genre} = request.body
        const gameIndex = games.findIndex(game => game.id === +id)
        if (gameIndex === -1) {
            return response.status(404).json({message: 'Game not found'})
        }
        if (typeof genre !== 'string' || games[gameIndex].genres.includes(genre)) {
            return response.status(400).json({message: 'Invalid Genre'})
        }
        games[gameIndex].genres.push(genre)
        response.status(201)
        response.json(games[gameIndex])
    },
    removeGenre: (request, response) => {
        const {id, name} = request.params
        
        const gameIndex = games.findIndex(game => game.id === +id)
        if (gameIndex === -1) {
            return response.status(404).json({message: 'Game not found'})
        }
        if (typeof name !== 'string' || !games[gameIndex].genres.includes(name)) {
            return response.status(400).json({message: 'Invalid Genre'})
        }
        games[gameIndex].genres = games[gameIndex].genres.filter(genre => genre !== name)
        response.status(204).end()
    },
    
}