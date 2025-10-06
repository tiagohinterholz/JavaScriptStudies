// personagem 1

let nameChar1 = prompt("Digite o nome do personagem 1:")
let damageChar1 = parseFloat(prompt("Digite o poder de ataque do personagem 1:"))

// personagem 2

let nameChar2 = prompt("Digite o nome do personagem 2:")
let lifeChar2 = parseFloat(prompt("Digite a quantidade de vida do personagem 2:"))
let defPower2 = parseFloat(prompt("Digite o poder de defesa do personagem 2:"))
let hasBlock2 = prompt("O personagem 2 tem escudo? (Sim / Não)")

let totalDamage = 0


if (damageChar1 > defPower2 && hasBlock2 === 'Não') {
    alert(`Dano total = ${totalDamage = damageChar1 - defPower2}`)
} else if (damageChar1 > defPower2 && hasBlock2 === 'Sim') {
    alert(`Dano total = ${totalDamage = (damageChar1 - defPower2) / 2}`)
} else if (damageChar1 < defPower2) {
    alert(`Dano total = 0`)
}

lifeChar2 -= totalDamage

alert(`O personagem ${nameChar2} ficou com ${lifeChar2} pontos de vida.`)