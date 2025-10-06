let lista_imoveis = []

do {
    let quant = lista_imoveis.length
    option = prompt(`Quantidade de imoveis cadastrados: ${quant}\n1) Cadastrar Imóvel\n2) Listar Imoveis\n3) Sair`)

    if (option === '1') {
        let arrImovel = {}
        arrImovel.nomeProp = prompt(`Digite o nome do proprietário:`)
        arrImovel.quantQuartos = parseFloat(prompt(`Digite o número de quartos:`))
        arrImovel.quantBan = parseFloat(prompt(`Digite o número de banheiros:`))
        arrImovel.temGaragem = prompt(`Possui garagem? (sim/não)`)
        lista_imoveis.push(arrImovel)
        alert("Imovel cadastrado com sucesso")
    } else if (option === '2') {
        for (let i = 0; i < lista_imoveis.length; i++){
            alert(`Imovel ${[i+1]}\n
                Proprietário: ${lista_imoveis[i].nomeProp}\n
                Quantidade de quartos: ${lista_imoveis[i].quantQuartos}\n
                Quantidade de banheiros: ${lista_imoveis[i].quantBan}\n
                Tem garagem: ${lista_imoveis[i].temGaragem}`)
        }
    }

} while(option !=='3')