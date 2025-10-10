const users = require("../models/users")

module.exports = {
    dashboard: (request, response) => {
        response.render('dashboard', {user: request.session.currentUser})
    },
    users: (request, response) => {
        response.render('users', {users})
    }
}