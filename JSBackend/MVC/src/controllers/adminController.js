const postModel = require('../models/postModel')

const adminController = {
    index: (request, response) => {
        const posts = postModel.getAllPosts()
        response.render('admin', {posts})
    },
    create: (request, response) => {
        response.render('newPostForm')
    },
    save: (request, response) => {
        const {title, content} = request.body
        const newPost = postModel.createPost(title, content)
        postModel.savePost(newPost)
        response.redirect('/admin')
    },
    edit: (request, response) => {
        const id = request.params.id
        const post = postModel.getPostById(id)

        response.render('editPostForm', {post})
    },
    update: (request, response) => {
        const id = request.params.id
        const {title, content} = request.body
        postModel.updatePost(id, {title, content})
        response.redirect('/admin')
    },
    delete: (request, response) => {
        const id = request.params.id
        postModel.deletePost(id)
        response.redirect('/admin')
    }
}

module.exports = adminController