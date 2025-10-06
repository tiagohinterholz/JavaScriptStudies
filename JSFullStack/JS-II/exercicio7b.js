const cards = []
let option = ""

do {
    option = parseFloat(prompt(
        "Cartas no baralho: " + cards.length +
        "\n1. Adicionar uma carta\n2. Puxar uma carta\n3. Sair"
    ))
    switch (option) {
        case 1:
            const novaCarta = prompt("Qual é a carta?")
            cards.push(novaCarta)
            break
        case 2:
            const cartaPuxada = cards.pop()
            if (!cartaPuxada) {
                alert("Não há cartas a serem puxadas")
            } else {
                alert(`Carta puxada: ${cartaPuxada}`)
            }
            break
        case 3:
            alert("Saindo")
            break
        default:
            alert("Opção inválida")
    }
} while (option !== 3)