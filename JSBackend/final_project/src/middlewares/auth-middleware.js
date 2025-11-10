const jwt = require('jsonwebtoken')
const usersModel = require('../models/users-model')

module.exports = {
    ensureAuth: (request, response, next) => {
        const authHeader = request.headers.authorization

        if (!authHeader) return response.status(401).json({message: 'Não autorizado'})
        
        const token = authHeader.split(' ')[1]

        try {
            const {id} = jwt.verify(token, process.env.JWT_KEY)
            const user = usersModel.getUserById(id)
            if (!user) return response.status(404).json({message: 'Não encontrado'})
            request.user = user
            next()
        } catch (err) {
            return response.status(401).json({message: 'Token Invalido'})
        }
    }
}