const postModel = require('../models/postModel')

const postController = {
    index: (request, response) => {
        const posts = postModel.getAllPosts()
        response.render('index', {posts})
    },
    show: (request, response) => {
        const post = postModel.getPostById(request.params.id)
        response.render('post', {post})
    }
}

module.exports = postController