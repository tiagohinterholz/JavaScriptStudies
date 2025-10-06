class Wallet {
    #amount
    #userName

    constructor() {
        this.#amount = 100.99 * 100 // regra arbitraria para explicar o uso do get e set
        this.#userName = "Tiago"
    }

    get amout() {
        return this.#amount / 100
    }

    set username(newUserName) {
        this.#userName = newUserName
    }

    get username() {
        return this.#userName
    }
}

const myWallet = new Wallet()
console.log(myWallet.username)
console.log(myWallet.amout)
myWallet.username = "Isaac"
console.log(myWallet.username)