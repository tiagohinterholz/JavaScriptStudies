module.exports = {
    dashboard: (request, response) => {
        response.render('dashboard', {user: request.session.currentUser})
    }
}