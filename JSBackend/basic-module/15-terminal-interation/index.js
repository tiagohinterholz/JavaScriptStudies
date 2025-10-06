// process.stdout.write("Hello, world!\n")

// process.stdin.on("data", (data) => {
//     process.stdout.write(`Você digitou ${data}`)
// })

const readLine = require('node:readline')

const rl = readLine.createInterface({ input: process.stdin, output: process.stdout })

// rl.on("line", (input) => {
//     rl.write(`Você digitou ${input}`)
// })

rl.question("Qual é o seu nome?\n", (answer) => {
    rl.write(`Olá ${answer}!\n`)
    rl.close()
})

// rl.on('close', () => {
//     rl.write('Saindo...\n')
//     process.exit(0)
// })

rl.on('SIGINT', () => {
  rl.question('Deseja realmente sair? (s/n) ', (resposta) => {
    if (resposta.trim().toLowerCase() === 's') {
      rl.close()
    } else {
      rl.write("Você escolheu continuar.")
    }
  })
})