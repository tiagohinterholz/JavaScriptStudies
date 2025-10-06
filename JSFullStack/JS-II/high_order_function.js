function calcular(a, b, operacao){
    //console.log("Realizando uma operação")
    const resultado = operacao(a, b)
    return resultado
}

function somar(x, y) {
    console.log("Realizando uma soma.")
    return x + y
}

function sub(x, y) {
    console.log("Realizando uma subtração.")
    return x - y
}

function mult(x, y) {
    console.log("Realizando uma multiplicação.")
    return x * y
}

function div(x, y) {
    console.log("Realizando uma divisão.")
    return x / y
}

console.log(calcular(20, 5, somar))
console.log(calcular(20, 5, sub))
console.log(calcular(20, 5, mult))
console.log(calcular(20, 5, div))

function exibirElemento(elemento, indice, array) {
    console.log(
        elemento,
        indice,
        array,
    )
}

const lista = ["maça", "banana", "laranja", "limão"]

// for (let i = 0; i < lista.length; i++){
//     exibirElemento(lista[i], i, lista)
// }

console.log(lista.forEach(exibirElemento))