const booksModel = require("../models/books-model")

module.exports = {
    index: (request, response) => {
        const books = booksModel.getAllBooks()
        response.json(books)
    },
    show: (request, response) => {
        const { id } = request.params
        const book = booksModel.getBookById(id)
        if (!book) return response.status(404).json({ message: 'Livro não encontrado!' })
        response.json(book)
    },
    save: (request, response) => {
        const {title, author, quantityAvailable } = request.body
        if (typeof title !== 'string' || typeof author !== 'string' || typeof quantityAvailable !== 'number') {
            return res.status(400).json({ message: 'Campos inválidos.' })
        }

        const newBook = booksModel.createBook(title, author, quantityAvailable)
        response.status(201).json(newBook)
    },
    update: (request, response) => {
        const {id} = request.params
        const {title, author, quantityAvailable } = request.body
        const fieldsToUpdate = {}
        
        if (typeof title !== 'string' || typeof author !== 'string' || typeof quantityAvailable !== 'number') {
            return res.status(400).json({ message: 'Campos inválidos.' })
        }

        if (title) fieldsToUpdate.title = title
        if (author) fieldsToUpdate.author = author
        if (quantityAvailable) fieldsToUpdate.quantityAvailable = quantityAvailable

        const updatedBook = booksModel.updatedBook(id, fieldsToUpdate)
        response.status(202).json(updatedBook)
    },
    delete: (request, response) => {
        const {id} = request.params
        const deletedBook = booksModel.deleteBook(id)
        response.status(200).json(deletedBook)
    },
}