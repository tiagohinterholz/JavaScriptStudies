const authMiddleware = (request, response, next) => {
    if (request.session.authenticated) {
        next()
    }
    else {
        response.redirect('/')
    }
}

module.exports = authMiddleware