const express = require('express')
const authController = require('./controllers/authController')
const welcomeController = require('./controllers/welcomeController')
const { optionalAuth, ensureAuth, ensureAdmin } = require('./middlewares/authMiddleware')
const usersController = require('./controllers/usersController')

const router = express.Router()

router.post('/auth/register', authController.register)
router.post('/auth/login', authController.login)
router.get('/welcome', optionalAuth, welcomeController.welcome)

router.get('/users', ensureAuth, ensureAdmin, usersController.index)

module.exports = router