module.exports = class Account {
    #balance

    constructor(user) {
        this.owner = user
        this.#balance = 0
        this.deposits = []
        this.loans = []
        this.transfers = []
    }

    get balance() {
        return this.#balance
    }

    addDeposit(deposit) {
        this.#balance += deposit.value
        this.deposits.push(deposit)
    }

    addLoan(loan) {
        this.#balance += loan.value
        this.loans.push(loan)
    }

    addTransfer(transfer) {
        if (transfer.receiveUser.email === this.owner.email) {
            this.#balance += transfer.value
            this.transfers.push(transfer)
        } else if (transfer.sendUser.email === this.owner.email) {
            this.#balance -= transfer.value
            this.transfers.push(transfer)
        }
    }
}
