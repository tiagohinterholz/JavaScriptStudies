// utiliza ...iterableObject

const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']

console.log(towns)
console.log(...towns)
console.log(...towns[0])

const townsClone = [...towns]  // clona pra nao mudar a referência tipo deep copy e shallow copy
townsClone.push('Aldebaran')

const townsObj = {...towns}