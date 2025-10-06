const { cp } = require('node:fs')
const os = require('node:os')

const plataform = os.platform()
console.log("Plataforma do SO: ", plataform)

const architecture = os.arch()
console.log("Arquitetura do SO: " , architecture)

// const cpus = os.cpus()
// console.log("Informações da CPU: ", cpus)

const memory = os.freemem()
console.log("Informações de memoria", memory / 1024 / 1024 / 1024, "GB")