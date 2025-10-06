class Reservation {
    constructor(guests, room, days) {
        this.guests = guests
        this. room = room
        this.days = days
        this.total = days * baseFee
    }

    static baseFee = 150

    static showBaseFee() { 
        console.log(`Base fee is ${Reservation.baseFee}`)
    }
}