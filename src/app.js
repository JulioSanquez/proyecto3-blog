require('dotenv').config()
const express = require('express')
const db = require( './utils/database' )
const postsRouter = require( './posts/posts.router' )

const app = express()
const PORT = process.env.PORT

app.use(express.json())

db.authenticate() 
.then( () => console.log('Las credenciales de la base de datos son correctos') )
.catch( err => console.log(err) )

db.sync()
.then( () => console.log('La base de datos de virus ha sido actualizada') )
.catch( err => console.log(err) )

app.get( '/', ( req, res ) => {
    res.json({message: 'Welcome to Blogs api v1'})
})

app.use( '/api/v1', postsRouter )

app.listen( PORT, () => console.log(`Run on port: ${PORT}`) )

module.exports = app
