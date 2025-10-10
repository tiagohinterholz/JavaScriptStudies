let users = [
    {username: 'Isaac', password: '123456'},
    {username: 'Tiago', password: '654321'},
]

module.exports = {
    index: (request, response) => {
        response.render('index')
    },
    register: (request, response) => {
        const {username, password} = request.body
        const userAlreadyExists = users.find(user => user.username == username)
        if (userAlreadyExists) {
            return response.status(400).redirect('/')
        }
        const newUser = {username, password}
        users.push(newUser)
        response.redirect('/dashboard')
    },
    login: (request, response) => {
        const {username, password} = request.body
        const user = users.find(user => user.username == username)
        if (!user || password !== user.password) {
            return response.status(400).redirect('/')
        }
        request.session.authenticated = true
        request.session.currentUser = user

        response.redirect('/dashboard')
    },
    logout: (request, response) => {
        request.session.destroy()
        response.redirect('/')
    }
    
}