const { Router } = require('express')
const productsController = require('./controllers/products-controller')
const router = Router()

router.get('/products', productsController.get)
router.post('/products', productsController.post)
router.get('/products/:id', productsController.get_detail)
router.patch('/products/:id', productsController.patch)
router.delete('/products/:id', productsController.delete)

module.exports = router