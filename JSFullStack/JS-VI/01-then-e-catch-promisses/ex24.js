function calculateTheIMC(weight, height) {
    return new Promise((resolve, reject) => {
        if (typeof weight === "number" && typeof height === "number") {
            resolve(weight / (height * height))
        } else {
            reject('Não foram passados dois números no formato válido!')
        }
    })
}

function showIMC(weight, height) {
    calculateTheIMC(weight, height).then((result) => {
        console.log(`A promise foi resolvida. O resultado é ${result}`)
        if (result <18.5) console.log('Situação: Magreza')
        else if (result < 25) console.log('Situação: Normal')
        else if (result < 30) console.log('Situação: Sobrepeso')
        else if (result < 40) console.log('Situação: Obesidade')
        else console.log('Situação: Obesidade Grave')
    }).catch((err) => {
        console.log(`Promise rejeitada! Motivo: ${err}`)
    }).finally(() => {
        console.log('A promisse foi finalizada')
    })
}

showIMC(100, "a")