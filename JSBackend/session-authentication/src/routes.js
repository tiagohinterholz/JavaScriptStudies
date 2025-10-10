const express = require('express')
const dashboardController = require('./controllers/dashboard-controller')
const authControler = require('./controllers/auth-controler')
const {authMiddleware, ensureUserAdmin} = require('./middlewares/auth-middleware')
const router = express.Router()

router.get('/', authControler.index)
router.get('/auth/logout', authMiddleware, authControler.logout)

router.post('/auth/register', authControler.register)
router.post('/auth/login', authControler.login)

router.get('/dashboard', authMiddleware, dashboardController.dashboard)
router.get('/dashboard/users', authMiddleware, ensureUserAdmin, dashboardController.users)

module.exports = router