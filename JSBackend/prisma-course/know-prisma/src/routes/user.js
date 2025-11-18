const { Router } = require("express");
const prisma = require('../database')

const router = Router()

router.get('/', async (request, response) => {
    const users = await prisma.user.findMany()
    response.json(users)
})
router.post('/', async (request, response) => { 
    const { name, email } = request.body
    const newUser = await prisma.user.create({
        data: { name, email }
    })
    response.status(201).json(newUser)
})
router.get('/:id', async (request, response) => { 
    const user = await prisma.user.findUnique({
        where: { id: +request.params.id },
        include: { posts: true }
    })
    response.status(200).json(user)
})
router.patch('/:id', async (request, response) => { 
    const { name, email } = request.body
    const updatedUser = await prisma.user.update({
        data: { name, email },
        where: { id: +request.params.id }
    })
    response.status(202).json(updatedUser)
})
router.delete('/:id', async (request, response) => { 
    const deletedUser = await prisma.user.delete({
        where: { id: +request.params.id }
    })
    response.status(201).json(deletedUser)
})


module.exports = router