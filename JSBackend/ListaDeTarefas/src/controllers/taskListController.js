const taskListModel = require("../models/taskListModel")

module.exports = {
    app: (request, response) => {
        const taskLists = taskListModel.getAllTaskLists()
        response.render('app', {taskLists})
    },
    create: (request, response) => {
        response.render('create.ejs')
    },
    save: (request, response) => {
        const {title} = request.body
        const newList = taskListModel.createList(title)
        taskListModel.saveList(newList)
        response.redirect('/app')
    },
    show: (request, response) => {
        const {id} = request.params
        if (!id) throw new Error('Lista de tarefa nao encontrada!')
        const taskList = taskListModel.getTaskListById(id)
        response.render('show', {taskList})
    },
    delete: (request, response) => {
        const {id} = request.params
        if (!id) throw new Error('Lista de tarefa nao encontrada!')
        taskListModel.deleteList(id)
        response.redirect('/app')
    },
    createTask: (request, response) => {
        const {id} = request.params
        const {title} = request.body
        taskListModel.createTask(id, title)
        response.redirect(`/app/${id}`)
    },
    completeTask: (request, response) => {
         const {listId, taskId} = request.params
         taskListModel.completeTask(listId, taskId)
         response.redirect(`/app/${listId}`)
    },
    undoTask: (request, response) => {
         const {listId, taskId} = request.params
         taskListModel.undoTask(listId, taskId)
         response.redirect(`/app/${listId}`)
    }
}