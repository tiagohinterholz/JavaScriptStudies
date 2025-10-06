function areaTriangulo() {
    let base = parseFloat(prompt("Informe a base:\n"))
    let altura = parseFloat(prompt("Informe a altura:\n"))
    alert(`A área do triângulo é ${base * altura / 2}m2`)
}

function areaRetangulo(){
    base = parseFloat(prompt("Informe a base:\n"))
    altura = parseFloat(prompt("Informe a altura:\n"))
    alert(`A área do retângulo é ${base * altura}`)
}

function areaQuadrado(){
    lado = parseFloat(prompt("Informe o lado do quadrado:\n"))
    alert(`A área do quadrado é ${lado * lado}`)
}

function areaTrapezio(){
    baseMenor = parseFloat(prompt("Informe a base menor:\n"))
    baseMaior = parseFloat(prompt("Informe a base maior:\n"))
    altura = parseFloat(prompt("Informe a altura:\n"))
    alert(`A área do trapézio é ${(baseMaior + baseMenor) * altura / 2}m2`)
}

function areaCirculo(){
    raio = parseFloat(prompt("Informe o raio do círculo:\n"))
    alert(`A área do circulo é ${3.14 * raio * raio}m2`)
}

do {
    option = parseFloat(prompt("Bem vindo à calculadora Geométrica.\n Escolha uma figura para calcular a área\n" + 
        "1. Cálculo da área do triângulo\n" +
        "2. Cálculo da área do retângulo\n" +
        "3. Cálculo da área do quadrado\n" +
        "4. Cálculo da área do trapézio\n" +
        "5. Cálculo da área do circulo\n" +
        "6. Sair"
    ))
    switch (option){
        case 1:
            areaTriangulo()
            break
        case 2:
            areaRetangulo()
            break
        case 3:
            areaQuadrado()
            break
        case 4:
            areaTrapezio()
            break
        case 5:
            areaCirculo()
            break
        case 6:
            alert("Saindo")
            break
        default:
            alert("Opção inválida")

    }
} while (option !==6)