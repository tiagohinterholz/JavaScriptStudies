import type { Handler } from "express"
import { Task } from "../models/TaskModel.js"
import { z } from "zod"
import { HttpError } from "../error/HttpError.js"


const CreateRequestSchema = z.object({
    title: z.string(),
    description: z.string(),
    status: z.enum(["todo", "doing", "done"]),
    priority: z.enum(["low", "medium", "high"])     
})

const UpdateRequestSchema = z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    status: z.enum(["todo", "doing", "done"]).optional(),
    priority: z.enum(["low", "medium", "high"]).optional()     
})

export class TaskController {
    get: Handler = (request, response) => {
        const tasks = Task.findAll()
        return response.json(tasks)
    }
    post: Handler = (request, response) => {
        const parsedBody = CreateRequestSchema.parse(request.body)
        const newTask = Task.create(parsedBody)
        response.status(201).json(newTask)        
    }
    get_detail: Handler = (request, response) => {
        const id = Number(request.params.id!)
        const task = Task.findById(+id)
        if (!task) throw new HttpError(404, 'task not found!')
        response.json(task)
    }
    patch: Handler = (request, response) => {
        const id = Number(request.params.id!)
        const task = Task.findById(+id)
        if (!task) throw new HttpError(404, 'task not found!')
        const parsedBody = UpdateRequestSchema.parse(request.body)
        const updatedTask = Task.update(+id, parsedBody)
        response.status(202).json(updatedTask)
    }
    delete: Handler = (request, response) => {
        const id = Number(request.params.id!)
        const task = Task.findById(+id)
        if (!task) throw new HttpError(404, 'task not found!')
        Task.delete(+id)
        response.status(204).send()
}
}