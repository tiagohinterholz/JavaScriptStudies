function dobro(x){
    return x * 2
}

dobro(4)

function criarUsuario(nome, email, senha, tipo){
    const usuario = {
        nome, //mesma coisa que nome=nome, se a variavel for igual ao parametro
        email,
        senha,
        tipo
    }
    console.log(usuario)
}

criarUsuario("Isaac", "isaac@gmail.com", "1234", "admin")

// function novoUsuario(nome, tipo='admin', email, senha) { // Os parametros padrões com valor default vai tudo pro FINAL
//     const usuario = {
//         nome,
//         email,
//         senha,
//         tipo
//     }
//     console.log(usuario)
// }

function muitosParametros(nome, telefone, aniversario, email, senha){
    // errado tambem, transformar em um objeto para chamar a função com um objeto e trabalhar
    // com as informações fora
}


