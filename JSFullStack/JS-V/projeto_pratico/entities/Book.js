const Product = require('./Product')

module.exports = class Book extends Product {
    constructor(title, synopsis, genre, pages, author, description, price, inStock = 0) {
        super(`Livre: ${title}, description, price, inStock`)
        this.title = title
        this.synopsis = synopsis
        this.genre = genre
        this.pages = pages
        this.author = author
        this.description = description
        this.price = price
        this.inStock = inStock
    }
}