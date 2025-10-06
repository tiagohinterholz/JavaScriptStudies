const a = 0 // operação logico 0 = False
const b = null // operação logica = False
const c = 'Teste'

console.log(a || b || c) //vai printar o c
console.log(a ?? b ?? c) // testa se é nullo ou undefined só isso
