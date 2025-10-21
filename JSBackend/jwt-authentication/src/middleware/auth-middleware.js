const jwt = require('jsonwebtoken')
const secretKey = 'palava-chave-super-secreta'

const authMiddleware = (request, response, next) => {
    const authHeader = request.headers.authorization
    if (!authHeader) {
        return response.status(401).json({message: 'Authorization required'})
    }
    const token = authHeader.split(' ')[1]
    try {
        const decodedToken = jwt.verify(token, secretKey)
        const user = users.find(user = user.username === decodedToken.username)
        if (!user) {
            return response.status(401).json({message: 'invalid token'})
        }
        request.authenticatedUser = user

        next()
    } catch (error) {
        return response.status(401).json({message: 'invalid token'})
    }
    next()
}

module.exports = authMiddleware