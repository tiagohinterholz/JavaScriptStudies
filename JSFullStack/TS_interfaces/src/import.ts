import { Spaceship } from "./export";
import * as lodash from "lodash"

interface BattleSpaceship extends Spaceship {
    weapons: number
}

let xwing: BattleSpaceship = {
    name: 'X-Wing',
    pilot: 'Luke Sky',
    speed: 50,
    weapons: 10
}

lodash.camelCase