class Product {
    constructor(name, description, price) {
        this.name = name
        this.description = description
        this.price = price
        this.inStock = 0
    }
    addToStock(quantity) {
        this.inStock += quantity
    }
    calculateDiscount(percent) {
        return this.price * ((100 - percent) / 100)
    }

}

const videoGame = new Product("PS4", "Video Game TOP", "2000")
console.log(videoGame)
videoGame.addToStock(40)
console.log(videoGame)
const new_price = videoGame.calculateDiscount(50)
console.log(new_price)