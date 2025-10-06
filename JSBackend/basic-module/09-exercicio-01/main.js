import { createFile, unlinkFile, updateFile, showFile } from "./four-functions.mjs"

createFile("Conteudo inicial\\nCriado com o modulo fs do NODE.js")
showFile()
updateFile("Conteudo sendo modificado")
showFile()
unlinkFile()