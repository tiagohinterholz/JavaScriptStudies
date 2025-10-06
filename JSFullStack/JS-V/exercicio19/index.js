const Author = require("./Author")
const john = new Author("John Doe")

const post = john.writePost("Titulo do Post", "Lorem ipsum")

post.addComment("Isaac Pontes", "Muito Bom!!")
post.addComment("Lucas", "Horrível!!")

console.log(john)
console.log(post)