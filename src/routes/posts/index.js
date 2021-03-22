const { Router } = require( 'express' )

const route = Router()

route.get('/',(req,res)=>{
    res.send("Todo://All the posts")
})

module.exports = {
    postsRoute:route
}

