const { Router } = require('express')
const productsController = require('./controllers/products-controller')
const customersController = require('./controllers/customers-controller')
const router = Router()

router.get('/products', productsController.get)
router.post('/products', productsController.post)
router.get('/products/:id', productsController.get_detail)
router.patch('/products/:id', productsController.patch)
router.delete('/products/:id', productsController.delete)

router.get('/customers', customersController.get)
router.post('/customers', customersController.post)
router.get('/customers/:id', customersController.get_detail)
router.patch('/customers/:id', customersController.patch)
router.delete('/customers/:id', customersController.delete)

module.exports = router