const postsController = require( './posts.controllers' )

const getAllPosts = (req, res) => {
  postsController.findAllPosts()
    .then( data => res.status(200).json(data) )
    .catch( err => res.status(400).json(err) )
}

const getPostById = (req, res) => {
  const id = req.params.id
  postsController.findPostById(id)
    .then( data => data ?
      res.status(200).json(data):
      res.status(404).json({message: "Post not found"}) 
    )
    .catch( err => res.status(400).json(err) )
}

const postPost = (req, res) => {
  const postObj = req.body
  postsController.createPost(postObj)
    .then( data => res.status(201).json(data) )
    .catch( err => res.status(400).json(err) )
}

const PatchPost = (req, res) => {
  const id = req.params.id
  const postObj = req.body
  postsController.updatePost( id, postObj )
    .then( data => data ?
      res.status(200).json(data):
      res.status(404).json({message: "Post not found"}) 
    )
    .catch( err => res.status(400).json(err) )
}

const deletePost = (req, res) => {
  const id = req.params.id
  postsController.deletePost( id )
    .then( data =>  data ?
      res.status(200).json(data):
      res.status(404).json({message: "Post not found"}) 
    )
    .catch( err => res.status(400).json(err) )
}

module.exports = {
  getAllPosts,
  getPostById,
  postPost,
  PatchPost,
  deletePost
}