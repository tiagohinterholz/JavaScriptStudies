let car1 = prompt("Insira o nome do primeiro carro:")
let speed1 = parseFloat(prompt("Insira a velocidade (km/h) do primeiro carro:"))

let car2 = prompt("Insira o nome do segundo carro:")
let speed2 = parseFloat(prompt("Insira a velocidade (km/h) do segundo carro:"))

if (speed1 > speed2) {
    alert(`O carro ${car1} é mais rápido que o ${car2}`)
} else if (speed1 < speed2){
    alert(`O carro ${car2} é mais rápido que o ${car1}`)
} else {
    alert(`O carro ${car1} e o ${car1} estão na mesma velocidade`)
}