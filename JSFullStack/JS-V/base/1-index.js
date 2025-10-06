// const book = {
//     title: "Eragon",
//     pages: 468,
//     published: true,
//     inStock: 20,
//     tags: ["fantasy", "adventure", "medieval"],
//     author: {
//         name: "Christopher Paolini"
//     },
//     addOnStock(quantity) {
//         this.inStock += quantity
//     },
//     save: function(){
//         //salva no banco de dados
//     }
// }
// PascalCase != camelCase

function Book (title, pages, tags, author) {
    this.title = title
    this.pages = pages
    this.tags = tags
    this.author = author
    this.published = false
    this.inStock = 0
    this.addOnStock = function addOnStock (quantity) {  //function pode ou nao ter um nome
        this.inStock += quantity
    }
    this.save = function(){
        //salva no banco de dados
    }
}

const author = { name: "Christopher Paolini" }
const tags = ["fantasy", "adventure", "medieval"]
const eragon = new Book("Eragon", 468, tags, author)
const eldest = new Book('Eldest', 644, tags, author)

console.log(eragon)
eragon.addOnStock(50)
console.log(eragon)
console.log(eldest)