async function asyncSum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return Promise.reject("Arguments must be numbers")
    }
    return a + b
}

async function asyncSubtract(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return Promise.reject("Arguments must be numbers")
    }
    return a - b
}

const sumResult = asyncSum(50, 35)
const subtractResult = asyncSubtract(50, 80)

Promise.all([sumResult, subtractResult]).then(results => {
    console.log(results)
}).catch(err => {
    console.log(err)
})

// const numbers = [4, 9, 13, 77]

// async function asyncSquare(x) {
//     return x*x
// }

// Promise.all(numbers.map(number => asyncSquare(number))).then(squares => {
//     console.log(squares)
// }).catch(err => {
//     console.log(err)
// })