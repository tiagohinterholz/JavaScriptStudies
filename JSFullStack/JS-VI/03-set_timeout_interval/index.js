console.log("Programa Iniciado")

// const timeOutId = setTimeout(() => {
//     console.log("5 segundos se passaram desde que o programa iniciou!")
// }, 1000 * 3) //milissegundos é a unidade, depois vai quebrando o tempo em unidades de min

// clearTimeout(timeOutId)

let seconds = 0

const intervalId = setInterval(() => {
    seconds += 3
    console.log(`Se passaram ${seconds} segundos`)
    if (seconds > 10) {
        clearInterval(clearInterval(intervalId))
        console.log("Tempo Esgotado! FIM")
    }
}, 1000 * 3)

