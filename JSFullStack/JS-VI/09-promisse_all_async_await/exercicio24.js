async function calculateTheIMC(weight, height) {
    if (typeof weight !== "number" && typeof height !== "number") {
        return Promisse.reject('Não foram passados dois números no formato válido!')  
    } 
    return (weight / (height * height))
}   

async function showIMC(weight, height) {
    try {
        console.log(`Calculando o IMC para o peso ${weight} e altura ${height}`)
        const result = await calculateTheIMC(weight, height)
        console.log(`O resultado do IMC foi de ${result}`)

        if (result <18.5) console.log('Situação: Magreza')
        else if (result < 25) console.log('Situação: Normal')
        else if (result < 30) console.log('Situação: Sobrepeso')
        else if (result < 40) console.log('Situação: Obesidade')
        else console.log('Situação: Obesidade Grave')
    } catch(err) {
        console.log(err)
    }
}

showIMC(100, 1.89)