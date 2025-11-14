const Product = require('../models/products-model')

const productsController = {
    get: async (request, response) => {
        const products = await Product.get()
        response.json(products)
    },
    post: async (request, response) => {
        const newProduct = await Product.post(request.body)
        response.status(201).json(newProduct)
    },
    get_detail: async (request, response) => {
        const product = await Product.get_detail(request.params.id)
        return response.json(product)

    },
    patch: async (request, response) => {
        const updatedProduct = await Product.patch(request.params.id, request.body)
        return response.json(updatedProduct)
    },
    delete: async (request, response) => {
        const result = await Product.delete(request.params.id)
        return response.json(result)
    },

}

module.exports = productsController