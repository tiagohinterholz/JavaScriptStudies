const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]
//console.log(arr)

// adicionar elementos - função push - final do array
//let tamanho = arr.push('Jason')
//console.log(arr)

// unshift - inicio do array
tamanho = arr.unshift('Tiago')
//console.log(arr)

// remover elementos - pop - final do array
//console.log(arr.pop())

// remover elementos - shift - no começo do array
//console.log(arr.shift())

// pesquisar por um elemento - includes - existe no array
const inclui = arr.includes('Tiago')
//console.log(inclui)

// pesquisar o indice do elemento - indexOf
const indice = arr.indexOf('Tiago')
//console.log(indice)

// cortar e concatenar os arrays - slice e concat

const arr2 = arr.slice(0, 4)
const arr3 = arr.slice(-4)
// console.log(arr2)
// console.log(arr3)

const sociedade = arr3.concat(arr2, "The Covers")
//console.log(sociedade)

// substituir elementos - splice - retorna uma lista de elementos removidos
const element_removido = sociedade.splice(4, 1, "Grêmio o Campeão")
console.log(element_removido, sociedade)

// iterar sobre os elementos do array

for (let i = 0; i < sociedade.length; i++){
    console.log(sociedade[i])
}