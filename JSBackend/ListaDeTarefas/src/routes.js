const express = require('express')
const taskListController = require('./controllers/taskListController')

const router = express.Router()

router.get('/', (request, response) => response.render('index'))
router.get('/app', taskListController.app)
router.get('/app/nova-lista', taskListController.create)
router.post('/app/nova-lista', taskListController.save)

router.get('/app/:id', taskListController.show)
router.post('/app/:id/nova-tarefa', taskListController.createTask)
router.post('/app/:id/excluir', taskListController.delete)

router.post('/app/:listId/completar/:taskId', taskListController.completeTask)
router.post('/app/:listId/desfazer/:taskId', taskListController.undoTask)

module.exports = router