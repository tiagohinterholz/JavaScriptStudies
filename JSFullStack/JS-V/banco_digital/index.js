const App = require('./App')

App.createUser('isaac@email.com', 'Isaac Pontes')
App.createUser('tiago@email.com', 'Tiago Hinterholz')
App.createUser('martin@email.com', 'Martin Hinterholz')

App.deposit("isaac@email.com", 100)
App.transfer("isaac@email.com", "tiago@email.com", 20)
App.changeLoanInterestRate(10)
App.loan("martin@email.com", 2000, 24)

console.log(App.findUser("isaac@email.com"))
console.log(App.findUser("isaac@email.com").account)

console.log(App.findUser("tiago@email.com"))
console.log(App.findUser("tiago@email.com").account)

console.log(App.findUser("martin@email.com"))
console.log(App.findUser("martin@email.com").account)
console.log(App.findUser("martin@email.com").account.loans[0].installments)