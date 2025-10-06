const fs = require("node:fs")
const path = require("node:path")
const { stdin, stdout } = require("node:process")
const readline = require("node:readline")

const notesDirectory = path.join(__dirname, "notes")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function askForNextAction() {
    rl.question("\nDeseja realizar outra escolha? (s/n): ", (answer) => {
        if (answer.toLowerCase() === "s") {
            main()
        } else {
            console.log("Encerrando...")
            rl.close()
            process.exit(0)
        }
    })
}

function initializeNotesDirectory() {
    if(!fs.existsSync(notesDirectory)) {
        fs.mkdirSync(notesDirectory)
    }
}

function listNotes() {
    const notes = fs.readdirSync(notesDirectory)
    if (notes.length === 0) {
        console.log("Nenhuma nota encontrada!")
    } else {
        console.log("Notas armazenadas: \n")
        notes.forEach((note, index) => {
            console.log(`${index + 1} - ${note}`)
        })
    }
}

function readNote() {
    listNotes()

    rl.question("Digite o número da nota que deseja ler: \n", (index) => {
        const notes = fs.readdirSync(notesDirectory)
        const selectedNote = notes[index-1]
        if (!selectedNote) {
            console.log("Número da nota não existe em nosso BD.")
        } else {
            const notePath = path.join(notesDirectory, selectedNote)
            const content = fs.readFileSync(notePath, "utf-8")
            console.log(`Conteúdo da nota selecionada: ${selectedNote}:\n\n${content}`)
        }

        askForNextAction()
    })
}

function createNote() {
    rl.question("Digite o nome da nota: ", (noteName) => {
        const notePath = path.join(notesDirectory, noteName)

        rl.question("Digite o conteúdo da nota: ", (noteContent) => {
            fs.writeFileSync(notePath + ".txt", noteContent, "utf-8")
            console.log(`Nota ${noteName} criada com sucesso!`)

            askForNextAction()
        })
    })
}

function deleteNote() {
    listNotes()

    rl.question("Digite o número da nota que deseja excluir: ", (index) => {
        const notes = fs.readdirSync(notesDirectory)
        const selectedNote = notes[index-1]
        
        if (!selectedNote) {
            console.log("Número da nota não existe em nosso BD.")
        } else {
            const notePath = path.join(notesDirectory, selectedNote)
            fs.unlinkSync(notePath)
            console.log(`Nota "${selectedNote}" deletada com sucesso!`)
        }

        askForNextAction()

    })
}

function main() {
    initializeNotesDirectory()

    console.clear()
    console.log("------------------------------")
    console.log("Notas Rápidas no Terminal v1.0")
    console.log("------------------------------\n")

    console.log("Escolha uma opção abaixo:\n")
    console.log("1 - Listar notas")
    console.log("2 - Ler uma nota")
    console.log("3 - Criar uma nota")
    console.log("4 - Excluir uma nota")
    console.log("5 - Sair")

    rl.question("Digite um número referente as opções acima: ", (option) => {
        switch(option) {
            case "1":
                listNotes()
                askForNextAction()
                break
            case "2":
                readNote()
                break
            case "3":
                createNote()
                break
            case "4":
                deleteNote()
                break
            case "5":
                console.log("Saindo...")
                rl.close()
                process.exit(0)
            default:
                console.log("Opção inválida!")
                break
        }
    })

}

main()