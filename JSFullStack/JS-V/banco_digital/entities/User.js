const Account = require('./Account')

module.exports = class User {
    constructor(userFullName, userEmail) {
        this.account = new Account(this)
        this.userEmail = userEmail
        this.userFullName = userFullName
    }
}