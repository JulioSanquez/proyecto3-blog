const Posts = require( '../models/posts.models' )

const findAllPosts = async (  ) => {
    const data = await Posts.findAll()
    return data
}

const findPostById = async ( id ) => {
    const data = await Posts.findOne({
        where:{
            id
        }
    })
    return data
}

const createPost = async ( postObj ) => {
    const data = await Posts.create(postObj)
    return data
}

const updatePost = async ( id, postObj ) => {
    const data = await Posts.update( postObj, {
        where:{
            id
        }
    } )
    return data
}

const deletePost = async ( id ) => {
    const data  = await Posts.destroy({
        where:{
            id
        }
    })
    return data
}

module.exports = {
    findAllPosts,
    findPostById,
    createPost,
    updatePost,
    deletePost
}
