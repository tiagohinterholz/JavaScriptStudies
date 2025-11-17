const Order = require('../models/orders-model')

const ordersController = {
    get: async (request, response) => {
        const orders = await Order.get()
        response.json(orders)
    },
    post: async (request, response) => {
        const newOrder = await Order.post(request.body.customerId, request.body.products)
        
        if (!(newOrder instanceof Order)) return response.status(400).json(newOrder)
        
        response.status(201).json(newOrder)
    },
    get_detail: async (request, response) => {
        const order = await Order.get_detail(request.params.id)
        return response.json(order)

    },
    delete: async (request, response) => {
        const result = await Order.delete(request.params.id)
        return response.json(result)
    },
}


module.exports = ordersController