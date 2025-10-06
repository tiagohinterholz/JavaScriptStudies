import { inline } from "./inline.js" //primeiro tipo
import defaultInline from "./inline.js" //segundo tipo só pode ter UM por arquivo
import { group } from "./non-inline.js"
import exportDefault from "./non-inline.js" // pode colocar na linha de cima também


inline()
defaultInline()

group()
exportDefault()