const { Router } = require( 'express' )
const {
    createNewPosts,
    findAllPosts
} = require('../../controller/posts')


const route = Router()

route.get('/',async (req,res)=>{
    // res.send("Todo://All the posts")
    const posts = await findAllPosts()
    res.status(200).send(posts)
})

//create post

route.post('/',async (req,res)=>{
    const {userId,title,body} = req.body

    if((!userId) || (!title) || (!body)) {
        return res.status(400).send({
            error:"Could not create post userId or title or body missing"
        })
    }
    const post = await createNewPosts(userId,title,body)

    res.status(201).send(post)
})

module.exports = {
    postsRoute:route
}

