function PhoneNumber(phoneNumber) {
    const fixedString = phoneNumber.replace(/[\sa-zA-Z]/g, "")
    this.countryCode = fixedString.match(/(?<=\+)\d{1,3}/)[0]
    this.ddd = fixedString.match(/(?<=\()\d+(?=\))/)[0]
    this.number = fixedString.match(/(?<=\)).+/)[0]
}


console.log(new PhoneNumber('+55 (22) 59559-5959'))
console.log(new PhoneNumber('+45 (55) 99a99-5dd59'))