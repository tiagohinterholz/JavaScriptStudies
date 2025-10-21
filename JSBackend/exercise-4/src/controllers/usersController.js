const users = require("../models/users")

module.exports = {
    index: (request, response) => {
        const allUsers = users.findAll()
        response.json(allUsers)
    },
    show: (request, response) => {
        const {id} = request.params
        const user = users.findById(id)
        if (!user) return response.status(404).json({message: 'User not found'})
    },
    save: (request, response) => {
        const {name, email, password, role} = request.body
        if (
            typeof name !== 'string' || typeof email !== 'string' || typeof password !== 'string' || 
            typeof role !== 'string' || !role.match(/^(admin|standard)$/)
        ) {
            return response.status(400).json({message: 'Invalid fields'})
        }
        const newUser = users.createUser(name, email, password, role)

        if (!newUser) return response.status(400).json({message: 'Email already in use'})
        
        response.satus(201).json(newUser)
    },
    delete: (request, response) => {
        const {id} = request.params
        const user = users.findById(id)
        if (!user) return response.status(404).json({message: 'User not found'})
        const deletedUser = users.deleteUser(id)
        if (!deletedUser) return response.status(400).json({message: 'Could not delete user'})
        
        response.json({deletedUser})
    }

}