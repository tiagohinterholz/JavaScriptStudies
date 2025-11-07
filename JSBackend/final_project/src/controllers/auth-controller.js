const usersModel = require('../models/users-model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

module.exports = {
    register: (request, response) => {
        const { name, email, password } = request.body

        if (typeof name !== 'string' || typeof email !== 'string' || typeof password !== 'string') {
            return response.status(400).json({ message: 'Todos os campos são obrigatórios' })
        }

        const existingUser = usersModel.getUserByEmail(email)
        if (existingUser) {
            return response.status(400).json({ message: 'E-mail já cadastrado!' })
        }

        const newUser = usersModel.createUser(name, email, password)
        response.status(201).json({ ...newUser, password: undefined })
    },
    login: (request, response) => {
        const { email, password } = request.body

        if (typeof email !== 'string' || typeof password !== 'string') {
            return response.status(400).json({ message: 'Todos os campos são obrigatórios' })
        }
        const user = usersModel.getUserByEmail(email)
        if (!user) {
            return response.status(404).json({ message: 'User não encontrado' })
        }
        const isValidPassword = bcrypt.compareSync(password, user.password)
        if (!isValidPassword) {
            return response.status(401).json({ message: 'Credenciais incorretas!' })
        }
        const token = jwt.sign({ id: user.id, email: user.email}, process.env.JWT_KEY, {expiresIn: '1d'})
        response.json({ token })
    }   
}