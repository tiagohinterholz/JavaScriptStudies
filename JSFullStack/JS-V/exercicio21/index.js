class Character {
    constructor(name, lifePoints, attackPoints, defPoints) {
        this.name = name
        this.lifePoints = lifePoints
        this.attackPoints = attackPoints
        this.defPoints = defPoints
    }

    attack(targetChar) {
        const damage = this.attackPoints - targetChar.defPoints
        if (damage > 0) {
            targetChar.lifePoints -= damage
        }
        if (targetChar.lifePoints <= 0){
            console.log(`O ${targetChar.name} acaba de ser liquidado!`)
        } 
    }

}

class Thief extends Character {
    attack(targetChar) {
        const damage = 2 * (this.attackPoints - targetChar.defPoints)
        if (damage > 0) {
            targetChar.lifePoints -= damage
        }
        if (targetChar.lifePoints <= 0){
            console.log(`O ${targetChar.name} acaba de ser liquidado!`)
        } 
    }
}

class Mage extends Character {
    constructor(name, lifePoints, attackPoints, defPoints, magicPoints) {
        super(name, lifePoints, attackPoints, defPoints)
        this.magicPoints = magicPoints
    }

    attack(targetChar) {
        const damage = (this.attackPoints + this.magicPoints) - targetChar.defPoints
        if (damage > 0) {
            targetChar.lifePoints -= damage
        }
        if (targetChar.lifePoints <= 0) {
            console.log(`${targetChar.name} acaba de ser liquidado!`)
        }
    }

    heal(targetChar) {
        targetChar.lifePoints += 2 * this.magicPoints
    }
}

class Warrior extends Character {
    constructor(name, lifePoints, attackPoints, defPoints, shieldPoints) {
        super(name, lifePoints, attackPoints, defPoints)
        this.shieldPoints = shieldPoints
        this.position = "attack"
    }

     attack(targetChar) {
        if (this.position !== 'attack') {
            console.log(`${this.name} está em defesa e não pode atacar.`)
            return
        }

        const damage = this.attackPoints - targetChar.defPoints
        if (damage > 0) {
            targetChar.lifePoints -= damage
        }
        if (targetChar.lifePoints <= 0) {
            console.log(`${targetChar.name} acaba de ser liquidado!`)
        }
    }

    change_position() {
        if (this.position === 'attack') {
            this.position = 'defense'
            this.defPoints += this.shieldPoints
        } else {
            this.position = 'attack'
            this.defPoints -= this.shieldPoints
        }
    }
}

// Criando personagens
const hero = new Character("Herói", 100, 30, 20)
const thief = new Thief("Ladrão", 80, 25, 15)
const mage = new Mage("Mago", 70, 20, 10, 15)
const warrior = new Warrior("Guerreiro", 120, 35, 25, 10)

// Testando ataque padrão
console.log("\n--- Herói ataca Ladrão ---")
hero.attack(thief)
console.log(`${thief.name} tem agora ${thief.lifePoints} de vida.`)

// Testando ataque do Ladrão
console.log("\n--- Ladrão ataca Mago ---")
thief.attack(mage)
console.log(`${mage.name} tem agora ${mage.lifePoints} de vida.`)

// Testando ataque do Mago
console.log("\n--- Mago ataca Guerreiro ---")
mage.attack(warrior)
console.log(`${warrior.name} tem agora ${warrior.lifePoints} de vida.`)

// Mago cura o guerreiro
console.log("\n--- Mago cura Guerreiro ---")
mage.heal(warrior)
console.log(`${warrior.name} tem agora ${warrior.lifePoints} de vida.`)

// Testando o Guerreiro em posição de defesa
console.log("\n--- Guerreiro entra em defesa e tenta atacar o Herói ---")
warrior.change_position()
warrior.attack(hero)
console.log(`${hero.name} tem agora ${hero.lifePoints} de vida.`)

// Guerreiro muda pra ataque e ataca
console.log("\n--- Guerreiro muda pra ataque e ataca o Herói ---")
warrior.change_position()
warrior.attack(hero)
console.log(`${hero.name} tem agora ${hero.lifePoints} de vida.`)