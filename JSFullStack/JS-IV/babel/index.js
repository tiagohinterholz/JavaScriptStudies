const mediaAritmetica = (...numbers) => {
    let m1 = numbers.reduce((accum, num) => accum + num, 0)
    return m1 / numbers.length
}

const mediaPonderada = (...numbers) => {
    const sumPeso = numbers.reduce((accum, num) => accum + (num.p ?? 1), 0) // ?? 1 é para ver se nao tem peso usa 1
    const sumNxP = numbers.reduce((accum, num) => accum + ((num.p ?? 1) * num.n), 0)
    return sumNxP / sumPeso
}

const mediana = (...numbers) => {
    tam = numbers.length
    qcient = Math.floor(tam / 2)
    const orderedNumbers = [...number].sort((a,b) => a - b)
    if (tam % 2 !== 0) {
        return orderedNumbers[qcient]
    }
    return (orderedNumbers[qcient] + orderedNumbers[qcient-1])/2
}

const moda = (...numbers) => {
    const quantities = numbers.map(num => [num, numbers.filter(n => num == n).length
    ]) //mapeia o vetor numbers pegando cada num e filtrando no proprio vetor onde n = num. O retorno é um vetor
    // com todas as vezes que apareceu o num por isso usa-se .lenght pra retornar só o tamnho dele. o Map retorna
    //[num, qtd], e a var quantities armazena [[n,q], [n,q]...]
    quantities.sort((a,b) => b[1] - a[1]) // aqui tu passa os parametros a e b só que o a é um array [n,q]
    //por tanto para ordenar pela q tem que passar [1]
    return quantities[0][0]
}    

arr2 = [{'n': 1, 'p': 1}, {'n': 2, 'p': 2}, {'n': 3, 'p': 3}, {'n': 4, 'p': 4}]
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(mediaAritmetica(...arr))
console.log(mediaPonderada(...arr2))
console.log(mediana(...arr3))