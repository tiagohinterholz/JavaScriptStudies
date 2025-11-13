import express from "express"
import { router } from "./router.js"
import { errorHandler } from "./middlewares/ErrorHandler.js";

const app = express()
app.use(express.json())
app.use('/api/', router)
app.use(errorHandler);

const PORT = 3000
app.listen(PORT, () => console.log(`Server iniciado em http://localhost:${PORT}`))