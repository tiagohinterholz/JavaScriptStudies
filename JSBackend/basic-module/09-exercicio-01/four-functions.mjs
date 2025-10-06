import fs from 'node:fs'


export function createFile(content) {
    fs.writeFile('./arquivo.txt', content, 'utf-8', (error) => {
        if (error) {
            console.log('Erro ao escrever o arquivo: ', error.message)
            return
        }
        console.log("Arquivo criado com sucesso de forma async")
    })
}

export function updateFile(content) {
    fs.writeFile('./arquivo.txt', content, 'utf-8', (error) => {
        if (error) {
            console.log('Erro ao escrever o arquivo: ', error.message)
            return
        }
    })
}

export function showFile() {
    fs.readFile('./arquivo.txt', 'utf-8', (error, data) => {
        if (error) {
            console.log("Erro ao ler o arquivo: ", error.message)
            
        } else {
            console.log(data)
        }
    })
}

export function unlinkFile() {
    fs.unlink('./arquivo.txt', (error) => {
        if (error) {
            console.log("Erro ao excluir o arquivo: ", error.message)
        } else {
            console.log ("Arquivo excluido com sucesso")
        }
    })
}

