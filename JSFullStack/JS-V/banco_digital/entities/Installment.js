module.exports = class Installment {
    constructor(installmentValue, installmentNumber) {
        this.installmentValue = installmentValue
        this.installmentNumber = installmentNumber
        this.installmentSituation = 'pending'
    }
}