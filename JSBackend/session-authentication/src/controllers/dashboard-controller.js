module.exports = {
    dashboard: (request, response) => {
        response.render('dashboard', {user: {username: user}})
    }
}