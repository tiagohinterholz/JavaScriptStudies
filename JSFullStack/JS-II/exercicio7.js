let waitQueue = ['Tiago']

let option = ''

do {
    let pacientes = ''
    for (let i = 0; i < waitQueue.length; i++) {
        pacientes += (i+1) + "º - " + waitQueue[i] + "\n"
    }
    
    option = parseFloat(prompt(
        "Pacientes:\n" + pacientes +
        "Escolha uma alternativa:\n1) Adicionar novo Paciente\n2) Consultar Paciente\n3) Sair"))
    
    if (option === 1){
        let name = prompt("Digite o nome do novo paciente:\n")
        waitQueue.push(name)
    }else if (option === 2) {
        if (waitQueue.length !== 0){
            let name = waitQueue.shift()
        alert(`Paciente consultado: ${name}`)
        } else {
            alert('Não há pacientes na fila')
        }
        
    } 
    
} while (option !== 3) 