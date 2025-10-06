const path = require('node:path')

const dir = "src"
const file = "app.js"

const fullPath = path.join(__dirname, dir, file)
const relativePath = path.join('.', dir, file)

console.log(fullPath)
console.log(relativePath)

const relativePath2 = "../arquivos/relatorios.pdf"
const absolutePath2 = path.resolve(__dirname, relativePath2)

console.log(absolutePath2)
console.log(relativePath2)

const fileName = path.basename(relativePath2)
console.log(fileName)

const ext = path.extname(absolutePath2)
console.log(ext)