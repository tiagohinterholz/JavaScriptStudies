const HttpError = require("../errors/HttpError")

module.exports = (error, request, response, next) => {
    if (error) {
        if (error instanceof HttpError) {
            response.status(error.status).json({ message: error.message })
        } else {
            response.status(400).json({ message: error.message })
        }
    } else {
        next()
    }
}
