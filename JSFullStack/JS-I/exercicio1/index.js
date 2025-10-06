const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function questionAsync(pergunta) {
    return new Promise((resolve) => {
        rl.question(pergunta, (resposta) => {
            resolve(resposta);
        });
    });
}

async function main() {
    const primeiroNome = await questionAsync("Informe o primeiro nome do recruta: ");
    const sobreNome = await questionAsync("Informe o sobrenome do recruta: ");
    const campoDeEstudo = await questionAsync("Informe o campo de estudo do recruta: ");
    const anoDeNascimento = await questionAsync("Informe o ano de nascimento do recruta: ");

    const idade = 2024 - parseInt(anoDeNascimento);

    console.log(
        "\nRecruta cadastrado com sucesso\n" +
        "\nNome completo: " + primeiroNome + " " + sobreNome +
        "\nCampo de Estudo: " + campoDeEstudo +
        "\nIdade: " + idade
    );

    rl.close();
}

main();
