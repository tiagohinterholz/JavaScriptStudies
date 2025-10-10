const authMiddleware = (request, response, next) => {
    if (!request.session.authenticated) {
        return response.redirect('/')
    }
    next()
}

const ensureUserAdmin = (request, response, next) => {
    if (request.session.currentUser !== 'admin') {
        return response.redirect('/dashboard')
    }
    next()

}

module.exports = {authMiddleware, ensureUserAdmin}