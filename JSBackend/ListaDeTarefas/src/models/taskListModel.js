const { getAllTaskLists } = require("../controllers/taskListController")

let taskLists = [
    {id: '1', 'title': 'Estudos', tasks: [{id: '1', title: 'Estudar Node', completed: false}]},
    {id: '2', 'title': 'Tarefas de Casa', tasks: []},
    {id: '3', 'title': 'Tarefas de trabalho', tasks: []},

]

module.exports = {
    getAllTaskLists: () => {
        return taskLists
    },
    getTaskListById: (id) => {
        return taskLists.find(list => list.id === id)
    },
    createList: (title) => {
        const newList = {
            id: Math.floor(Math.random() * 99999).toString(),
            title: title,
            tasks: []
        }
        return newList
    },
    saveList: (taskList) => {
        if (taskList.title === '') throw new Error('Titulo da lista nao pode ser vazio')
        taskLists.push(taskList)
    },
    deleteList: (listId) => {
        const listIndex = taskLists.findIndex(list => list.id === listId)
        taskLists.splice(listIndex, 1)
    },
    createTask: (listId, taskTitle) => {
        const newTask = {
            id: Math.floor(Math.random() * 99999).toString(),
            title: taskTitle,
            completed: false
        }
        taskLists.find(list => list.id === listId).tasks.push(newTask)
    },
    completeTask: (listId, taskId) => {
        const task = taskLists.find(list => list.id === listId).tasks.find(task => task.id === taskId)
        task.completed = true
    },
    undoTask: (listId, taskId) => {
        const task = taskLists.find(list => list.id === listId).tasks.find(task => task.id === taskId)
        task.completed = false
    }
}