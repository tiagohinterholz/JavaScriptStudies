import { ErrorRequestHandler } from "express"
import { HttpError } from "../error/HttpError.js"

export const errorHandler: ErrorRequestHandler = (err, request, response, next) => {
    if (err instanceof HttpError) {
        response.status(err.status).json({ message: err.message })
    } else if (err instanceof Error) {
        response.status(500).json({ message: err.message })
    } else {
        response.status(500).json({ message: 'internal Server error' })
    }
}
