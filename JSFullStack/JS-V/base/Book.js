class Book {
    constructor(title) {
        this.title = title
        this.published = false
    }
    publish() {
        this.published = true
    }    
}

const eragon = new Book("Eragon")
console.log(eragon)
eragon.publish()
console.log(eragon)
console.log(eragon instanceof Book)