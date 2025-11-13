import { Router } from "express";
import { TaskController } from "./controllers/TaskController.js";

const router = Router()
const taskController = new TaskController()


router.get('/tasks', taskController.get)
router.post('/tasks', taskController.post)
router.get('/tasks/:id/', taskController.get_detail)
router.patch('/tasks/:id/', taskController.patch)
router.delete('/tasks/:id/', taskController.delete)

export { router }