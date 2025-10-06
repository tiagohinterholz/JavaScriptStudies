let word = prompt("Informe uma palavra para validar se é palindroma ou não:")

let wordReverse = ""

for (i = word.length - 1; i >=0; i--) {
    wordReverse += word[i]
}

if (word === wordReverse) {
    alert(`A palavra ${word} é palíndroma`)
} else {
    alert(`A palavra ${word} não é palíndroma de ${wordReverse}`)
}



