const Installment = require('./Installment')

module.exports = class Loan extends Installment {
    static #interestRate = 1.05
    
    static get interestRate() {
        return Loan.#interestRate
     }

    static set interestRate(new_rate) {
        Loan.#interestRate = 1 + (new_rate / 100 )
    }    

    constructor(loanValue, installments) {
        super()
        this.installments = []
        this.loanValue = loanValue
        for (let i = 1; i <= installments; i++){
            this.installments.push(new Installment((loanValue * Loan.#interestRate / installments), i))
        }
        this.dateLoan = new Date()
    }
}