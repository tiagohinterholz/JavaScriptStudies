module.exports = class Transfer {
    constructor(sendUser, receiveUser, valueTransfer) {
        this.sendUser = sendUser
        this.receiveUser = receiveUser
        this.valueTransfer = valueTransfer
        this.dateTransfer = new Date()
    }
}