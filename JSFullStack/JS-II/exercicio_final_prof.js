const vagas = []

function listarVagas(){
    const vagasEmTexto = vagas.reduce(function (textoFinal, vaga, indice) {
        // 1. nome, x candidatos
        textoFinal += indice + ". "
        textoFinal += vaga.nome
        textoFinal += " (" + vaga.candidatos.length + " candidatos)\n"
        return textoFinal
    }, "")
    alert(vagasEmTexto)
}

function novaVaga(){
    const nome = prompt("Informe o nome da vaga:\n")
    const desc = prompt("Informe uma descrição para vaga:\n")
    const data = prompt("Informe a data limite da vaga (dd/mm/aaaa):\n")
    
    const confirma = confirm(
        `Deseja criar uma nova vaga com as seguintes informações:
        Nome: ${nome}\nDescrição: ${desc}\nData Limite de Cadastro: ${data}`
    )

    if (confirma) {
        const novaVaga = {nome: nome, descricao: desc, dataLimite: data, candidatos: []}
        vagas.push(novaVaga)
        alert("Vaga criada")
    }
}

function exibirVaga() {
    const indice = prompt("Informe o indice da vaga que deseja exibir:\n")

    if (indice >= vagas.length || indice < 0) {
        alert("Vaga não cadastrada")
        return
    }
    const vaga = vagas[indice]

    const candidatosEmTexto = vaga.candidatos.reduce(function (textoFinal, candidato) {
        return `${textoFinal}\n${candidato}`
    }, "")

    alert(`Vaga n. ${indice}
        Nome: ${vaga.nome}
        Descrição: ${vaga.descricao}
        Data Limite: ${vaga.dataLimite}
        Quantidade de Candidatos: ${vaga.candidatos.length}
        Candidatos Inscritos: ${candidatosEmTexto}`)
}

function inscreverCandidato() {
    const candidato = prompt("Informe o nome do candidato(a):\n")
    const indice = parseFloat(prompt("Informe o indice da vaga pretendida:\n"))
    if (indice >= vagas.length || indice < 0) {
        alert("Vaga não cadastrada")
        return
    }

    const vaga = vagas[indice]

    const confirma = confirm(`Deseja inscrever o candidato ${candidato} na vaga {indice}?
        Nome: ${vaga.nome}\n Descrição: ${vaga.descricao}\n Data Limite: ${vaga.dataLimite}`)
    
    if (confirma){
        vaga.candidatos.push(candidato)
        alert("Inscrição realizada.")
    }
}

function excluirVaga() {
    const indice = prompt("Informe o ID da vaga que deseja excluir:\n")
    if (indice >= vagas.length || indice < 0) {
        alert("Vaga não cadastrada")
        return
    }
    const vaga = vagas[indice]

    const confirma = confirm(`Tem certeza que quer excluir a vaga {indice}?
        Nome: ${vaga.nome}\n Descrição: ${vaga.descricao}\n Data Limite: ${vaga.dataLimite}`)
    if (confirma) {
        vagas.splice(indice, 1)
        alert("Vaga excluida")
    }
}

function exibirMenu() {
    const option = prompt("Bem vindo ao menu de vagas da THDev." +
        "Escolha uma opção abaixo para prosseguir\n\n" +
        "1) Listar vagas disponíveis\n" +
        "2) Criar nova vaga\n" + 
        "3) Visualizar vaga existente\n" + 
        "4) Inscrever-se em uma vaga\n" +
        "5) Excluir uma vaga existente\n" +
        "6) Sair"
    )
    return option
}

function executar() {
    let opcao = ""

    do {
        opcao = exibirMenu()

        switch(opcao){
            case "1":
                listarVagas()
                break
            case "2":
                novaVaga()
                break
            case "3":
                exibirVaga()
                break
            case "4":
                inscreverCandidato()
                break
            case "5":
                excluirVaga()
                break
            case "6":
                alert("Saindo do sistema de cadastro")
                break
            default:
                alert("Opção inválida, escolha entre 1 e 6")
        }
    } while (opcao !== "6")
}

executar()