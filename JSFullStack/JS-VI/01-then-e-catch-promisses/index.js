function execute() {
    return new Promise((resolve, reject) => {
        console.log('A promise está sendo executada!')
        setTimeout(() => {
            if (true) {
                reject('O inter caiu pra série b')
            }
            else {
                console.log('Resolvendo a promise...')
                resolve(50)
            }
        }, 1000 * 1)
    })
}

execute().then((result) => {
    console.log(`A promise foi resolvida. O resultado é ${result}`)
}).catch((err) => {
    console.log(`Promise rejeitada! Motivo: ${err}`)
}).finally(() => {
    console.log('A promisse foi finalizada')
})