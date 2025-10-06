class Account {
    #password
    #balance = 0
    constructor(user) {
        this.email = user.email
        this.#password = user.password
    }
    getBalance(email, password) {
        if (this.#authenticate(email, password)) {
            return this.#balance
        } else {
            return null
        }
    }
    #authenticate(email, password) {
        return this.email === email && this.#password === password
    }
}

const user = {
    email: "isaac@email.com",
    password: "123456"
}

const myAccount = new Account(user)
console.log(myAccount)
// myAccount.#balance = 1000000 não da alterar atribudo privado e se eu tirar a # é como se fosse um NOVO atributo
// myAccount.#password = 111111

console.log(myAccount.getBalance("isaac@email.com", "123456"))