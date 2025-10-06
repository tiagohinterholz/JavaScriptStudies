let initialMoney = parseFloat(prompt("Qual a quantidade inicial de dinheiro disponível?"))

let opcao = ""

do {
    opcao = prompt(
        "Seja bem-vindo(a)!\n" +
        "\nDinheiro total disponível: " + "R$ " + initialMoney +  
        "\nEscolha uma das opções abaixo:" +
        "\n1 - Depositar dinheiro" +
        "\n2 - Sacar Dinheiro" +
        "\n3 - Encerrar transações"
        )
      
    switch (opcao) {
        case "1":
        alert("Você escolheu a opção 1.")
        let depositMoney = parseFloat(prompt("Qual a quantidade de dinheiro para depósito?"))
        initialMoney += depositMoney
        break
        case "2":
        alert("Você escolheu a opção 2.")
        let withdrawMoney = parseFloat(prompt("Qual a quantidade de dinheiro para retirada?"))
        if (initialMoney - withdrawMoney < 0) {
            alert("Você não tem saldo suficiente.")
        } else {
            initialMoney -= withdrawMoney
        }
        break
        case "3":
        alert("Encerrando a transação...")
        break
        default:
        alert("Entrada inválida! Escolha uma das três opções.")
    }
} while (opcao !== "3");

