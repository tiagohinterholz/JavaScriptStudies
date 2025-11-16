const Customer = require('../models/customers-model')

const customersController = {
    get: async (request, response) => {
        const customers = await Customer.get()
        response.json(customers)
    },
    post: async (request, response) => {
        const newCustomer = await Customer.post(request.body)
        response.status(201).json(newCustomer)
    },
    get_detail: async (request, response) => {
        const customer = await Customer.get_detail(request.params.id)
        return response.json(customer)

    },
    patch: async (request, response) => {
        const updatedCustomer = await Customer.patch(request.params.id, request.body)
        return response.json(updatedCustomer)
    },
    delete: async (request, response) => {
        const result = await Customer.delete(request.params.id)
        return response.json(result)
    },

}

module.exports = customersController