const User = require('./entities/User')
const Deposit = require('./entities/Deposit')
const Transfer = require('./entities/Transfer')
const Loan = require('./entities/Loan')


module.exports = class App {
    static #users = []

    static findUser(email) {
        const user = this.#users.find(user => user.userEmail === email)
        return user ?? null
    }

    static createUser(userEmail, userFullName) {
        const userExists = App.findUser(userEmail)
        if (!userExists) {
            this.#users.push(new User(userFullName, userEmail))
        }
    }

    static deposit(email, depositValue) {
        const user = App.findUser(email)
        if (user) {
            const newDeposit = new Deposit(depositValue)
            user.account.addDeposit(newDeposit)
        }
    }
    
    static transfer(sendUserEmail, receiveUserEmail, valueTransfer) {
        const sendUser = App.findUser(sendUserEmail)
        const receiveUser = App.findUser(receiveUserEmail)
        if (sendUser && receiveUser) {
            const newTransfer = new Transfer (sendUser, receiveUser, valueTransfer)
            sendUser.account.addTransfer(newTransfer)
            receiveUser.account.addTransfer(newTransfer)
        }
    }

    static loan(email, loanValue, installments) {
        const user = App.findUser(email)
        if (user) {
            const newLoan = new Loan(loanValue, installments)
            user.account.addLoan(newLoan)
        }
    }

    static changeLoanInterestRate(newRate) {
        Loan.interestRate = newRate
    }
 }