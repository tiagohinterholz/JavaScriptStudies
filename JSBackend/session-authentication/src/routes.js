const express = require('express')
const dashboardController = require('./controllers/dashboard-controller')
const authControler = require('./controllers/auth-controler')
const authMiddleware = require('./middlewares/auth-middleware')
const router = express.Router()

router.get('/', authControler.index)
router.get('/auth/logout', authMiddleware, authControler.logout)

router.post('/auth/register', authControler.register)
router.post('/auth/login', authControler.login)

router.get('/dashboard', authMiddleware, dashboardController.dashboard)

module.exports = router