const jwt = require("jsonwebtoken")
const { JWT_SECRET } = require("../config/environment")
const users = require('../models/users')


module.exports = {
    optionalAuth: (request, response, next) => {
        const authHeader = request.headers.authorization

        if (!authHeader) {
            next()
        } else {
            const token = authHeader.split(' ')[1]

            try {
                const {id} = jwt.verify(token, JWT_SECRET)
                const user = users.findById(id)
                if (!user) return response.status(404).json({message: 'User not found'})
                request.authenticatedUser = user
                next()
            } catch (error) {
                return response.status(401).json({message: 'Invalid Token'})
            }
        }
    },
    ensureAuth: (request, response, next) => {
        const authHeader = request.headers.authorization

        if (!authHeader) {
            return response.status(401).json({message: 'Authorization header required!'})
        }
        const token = authHeader.split(' ')[1] 

        try {
                const {id} = jwt.verify(token, JWT_SECRET)
                const user = users.findById(id)
                if (!user) return response.status(404).json({message: 'User not found'})
                request.authenticatedUser = user
                next()
            } catch (error) {
                return response.status(401).json({message: 'Invalid Token'})
            }

    },
    ensureAdmin: (request, response, next) => {
        if (request.authenticatedUser?.role === 'admin') {
            next()
        } else {
            response.status(403).json({message: 'Permission Denied!'})
        }

    }
}