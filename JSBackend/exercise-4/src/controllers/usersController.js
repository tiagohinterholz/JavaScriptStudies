const users = require("../models/users")

module.exports = {
    index: (request, response) => {
        const allUsers = users.findAll()
        response.json(allUsers)
    }
}