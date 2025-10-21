const express = require('express')
const authMiddleware = require('../middleware/auth-middleware')

const protectedRouter = express.Router()

protectedRouter.get('/dashboard', authMiddleware, (request, response) => {
    const username = request.authenticatedUser.username
    response.json({message: `Bem vindo ${username}`})
})

module.exports = protectedRouter