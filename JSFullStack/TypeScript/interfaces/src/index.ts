interface CelestiaBody {
    name: string
    mass: number
}

interface Star extends CelestiaBody {
    age: number
    planets: Planet[]
}

interface Planet extends CelestiaBody {
    population: number
    createSatellite: (name: string) => void
}

let sun: Star

sun.name = "Sol"
sun.mass = 1.989 * (10 ** 30)
sun.age = 4.603 * (10 **9)
sun.planets = []

class MilkWayPlanet implements Planet {
    name: string
    mass: number
    population: number

    constructor(name: string, mass: number, population: number){
        this.name = name
        this.mass = mass
        this.population = population
    }
    createSatellite(name: string) {

    }
}