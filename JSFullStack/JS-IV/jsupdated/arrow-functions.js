function normalSum(a, b) {
    return a + b
}

console.log(`Soma normal: ${normalSum(2, 2)}`)

const anonymousSum = function(a, b) {
    return a + b
}

console.log(`Soma anônima: ${anonymousSum(2, 2)}`)

const arrowSum = (a, b) => {
    return (a + b)
}

console.log(`Soma arrow: ${arrowSum(2, 2)}`)

const subtract = (a, b) => a - b
console.log(`Subtract arrow: ${subtract(2, 2)}`)

//HIGH ORDER FUNCTIONS

const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']

const startWithP = towns.filter(town => town[0] === 'P')
console.log(startWithP)

