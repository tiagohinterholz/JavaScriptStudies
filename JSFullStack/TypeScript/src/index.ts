function sendSpaceShip(name: string, captain: string) {
    const spaceship = {
        name,
        captain,
        speed: 20,
        inMission: true,
        crew: []
    }

    alert(`The spaceship ${spaceship.name} guided by the captain ${spaceship.captain} was send to an Mission`)

    return spaceship
}

function accelerate(targetSpeed: number, spaceship: { name: string, speed: number }) {
    if (spaceship.speed > targetSpeed) {
        alert(`Reduzindo a velocidade da ${spaceship.name} para ${targetSpeed}`)
    } else if (spaceship.speed < targetSpeed){
        alert(`Aumentando a velocidade da ${spaceship.name} para ${targetSpeed}`)
    } else {
        alert(`Mantendo a velocidade da ${spaceship.name}`)
    }
}

const spaceshipName = prompt('Insira o nome da nave a ser enviada.')
const spaceshipCaptain = prompt('Insira o nome capitão da name.')

const currentShip = sendSpaceShip(spaceshipName, spaceshipCaptain)

const speed = parseInt(prompt("Insira a velocidade para qual deseja acelerar."))

accelerate(speed, currentShip)