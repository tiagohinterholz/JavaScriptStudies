const DataBase = require('./Database')
const User = require('./entities/User')
const Book = require('./entities/Book')
const Poster = require('./entities/Poster')
const Order = require('./entities/Order')
const Author = require('./entities/Author')

module.exports = class App {
    static #database = new DataBase()

    createUser(name, email, password) {
        const user = new User(name, email, password)
        return App.#database.saveUser(user)
    }

    getUsers() {
        return App.#database.find('users')
    }

    createAuthor(name, nationality, bio) {
        const author = new Author(name, nationality, bio)
        return App.#database.saveAuthor(author)
    }

    getAuthors() {
        return App.#database.find('authors')
    }

    createBook(title, synopsis, genre, pages, author, description, price, inStock) {
        const book = new Book(title, synopsis, genre, pages, author, description, price, inStock)
        App.#database.saveBook(book)
    }

    addBook(bookname, quantity) {
        App.#database.addBooksToStock(bookname, quantity)
    }

    getBooks() {
        return App.#database.find('books')
      }

    createPoster(name, description, height, width, price, inStock) {
        const poster = new Poster(name, description, height, width, price, inStock)
        App.#database.savePoster(poster)
    }

    addPoster(postername, quantity) {
        App.#database.addPostersToStock(postername, quantity)
    }

    getPosters() {
        return App.#database.find('posters')
      }

    createOrder(items, user) {
        const order = new Order(items, user)
        App.#database.saveOrder(order)
        order.data.items.forEach(({ product, quantity }) => {
            if (product instanceof Book) {
                App.#database.removeBooksToStock(product.name, quantity)
            } else if (product instanceof Poster) {
                App.#database.removePostersToStock(product.name, quantity)
            }
        })
    }

    getOrders() {
        return App.#database.find('orders')
    }

    showDatabase() {
        return App.#database.showStorage()
    }
}   