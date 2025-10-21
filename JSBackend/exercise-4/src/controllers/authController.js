const { JWT_SECRET } = require("../config/environment")
const users = require("../models/users")
const jwt = require('jsonwebtoken')

module.exports = {
    register: (request, response) => {
        const {name, email, password} = request.body
        if (typeof name !== 'string' || typeof email !== 'string' || typeof password !== 'string') {
            return response.status(400).json({message: 'Invalid fields'})
        }

        const registeredUser = users.registerUser(name, email, password)
        if (!registeredUser) {
            return response.status(400),json({message: 'Email already in use'})
        }
        response.status(201).json(registeredUser)
    },
    login: (request, response) => {
        const {email, password} = request.body 
        if (typeof email !== 'string' || typeof password !== 'string') {
            return response.status(400).json({message: 'Invalid fields'})
        }

        const user = users.findByEmail(email)
        if (!user) return response.status(404).json({message: 'User not found'})
        if (user.password !== password) return response.status(404).json({message: 'Invalid Credentials'})
        
        const payload = {id: user.id, email: user.email}
        const token = jwt.sign(payload, JWT_SECRET)

        response.json({token})
    },
}