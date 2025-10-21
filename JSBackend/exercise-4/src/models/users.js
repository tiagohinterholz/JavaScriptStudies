const users = [
    {
        id: '1', 
        name: 'Isaac',
        email: 'isaac@email.com',
        password: '123456',
        role: 'admin'
    }
]

module.exports = {
    findAll: () => users,
    findById: (id) => users.find(user => user.id === id),
    findByEmail: (email) => users.find(user => user.email === email),
    registerUser: (name, email, password) => {
        const userAlreadyRegistered = users.find(user => user.email === email)
        if (userAlreadyRegistered) return null

        const newUser = {
            id: Math.floor(Math.random() * 9999).toString(),
            name,
            email,
            password,
            role: 'standard'
        }
        users.push(newUser)
        return newUser
    },
    createUser: (name, email, password, role) => {
        const userAlreadyRegistered = users.find(user => user.email === email)
        if (userAlreadyRegistered) return null

        const newUser = {
            id: Math.floor(Math.random() * 9999).toString(),
            name,
            email,
            password,
            role
        }
        users.push(newUser)
        return newUser
    },
    deleteUser: (id) => {
        const userIndex = users.find(user => user.id === id)
        if (userIndex === -1) return null

        const [deleteUser] = user.splice(userIndex, 1)
        return deleteUser
    }
}