const num = parseFloat(prompt("Insira um número de 1 a 20 para calculo da sua tabuada:"))
let result = ""

for (let i=1; i<=20; i++) {
    let mult = i * num
    result += `${i} * ${num} = ${mult}\n`
}

alert(result)
alert("Finalizando")