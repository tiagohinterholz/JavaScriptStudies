function sendSpaceShip(spaceship: {pilot: string, copilot?: string})

sendSpaceShip({pilot: 'Han Solo', copilot: 'Chewbacc'})

sendSpaceShip({pilot: 'Luke'})

// let input: unknown
let input: any

input = 'Test'
input = 20
input = []

let text: string

// test = input Não pode na teoria. Se usar o ANY na variável ai pode
text = input


function verification(test) {
    if (test) {

    } else {
        let _check: never
        return _check
    }
}