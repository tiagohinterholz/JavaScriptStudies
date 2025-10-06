let nomeTurista = prompt("Digite seu nome, turista:")
let checkVisit = prompt("Você ja visitou alguma cidade? (sim/não)")
let totalCities = ''

while (checkVisit !== 'não') {
    let nameCity = prompt("Diga-me o nome da cidade então:")
    totalCities += " - " + nameCity + "\n"
    checkVisit = prompt("Você ja visitou alguma outra cidade? (sim/não)")
}

if (totalCities.length !== 0) {
    alert(`O turista ${nomeTurista} visitou as cidades ${totalCities}.`)
} else {
    alert(`O turista ${nomeTurista} é um bocó e nunca visitou nenhuma cidade.`)
}