const HttpError = require("../errors/HttpError")
const booksModel = require("../models/books-model")
const loansModel = require("../models/loans-model")

module.exports = {
    index: (request, response) => {
        const loans = loansModel.getAllLoans()
        response.json(loans)
    },
    show: (request, response) => {
        const { id } = request.params
        const loan = loansModel.getLoanById(id)
        if (!loan) throw new HttpError(404, 'Empréstimo não encontrado!')
        response.json(loan)
    },
    create: (request, response) => {
        const user = request.user
        const { bookId } = request.body
        if (typeof bookId !== 'string') throw new HttpError(400, 'Id de livro inválido!')
        
        const book = booksModel.getBookById(id)
        if (!book) throw new HttpError(404, 'Livro não encontrado!')
        
        const newLoan = loansModel.createLoan(user, book)

        response.status(201).json(newLoan)
    },
    return: (request, response) => {
        const { id } = request.params
        loan = loansModel.getLoanById(id)
        response.json(loan)
    }
}