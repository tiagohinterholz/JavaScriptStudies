const express = require('express')
const users = require('../models/user')
const authRouter = express.Router()
const jwt = require('jsonwebtoken')

const secretKey = 'palava-chave-super-secreta'

authRouter.post('/register', (request, response) => {
    const {username, password} = request.body
    const user = {username, password}
    users.push(user)
    response.status(201).json(user)
})

authRouter.post('/login', (request, response) => {
    const {username, password} = request.body
    const user = users.find(user => user.username === username)
    
    if(!user || user.password !== password){
        return response.status(401).json({message: 'Invalid credentials'})
    }
    const payload = {username}

    const token = jwt.sign(payload, secretKey, {expiresIn: '1h'})

    response.json({token})
})

module.exports = authRouter