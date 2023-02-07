const postsServices = require( './posts.services' )
const postsRouter = require( 'express' ).Router()

postsRouter.get('/posts', postsServices.getAllPosts)
postsRouter.post('/posts', postsServices.postPost)

postsRouter.get('/posts/:id', postsServices.getPostById)
postsRouter.patch('/posts/:id', postsServices.PatchPost)
postsRouter.delete('/posts/:id', postsServices.deletePost)

module.exports = postsRouter