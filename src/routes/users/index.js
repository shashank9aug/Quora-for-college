const e = require('express')
const { Router } = require( 'express' )
const { createAnonUser,
    getUserById,
    getUserByUsername,
} = require('../../controller/users')

const route = Router()

route.get('/:id',async (req,res)=>{
    // res.send("Todo://All the users")

    let user

    if(isNaN(parseInt(req.params.id))){
        //when params is  not id,
        user = await getUserByUsername(req.params.id)

    }
    else{
        //when params is id
        user = await getUserById(req.params.id)  
    }

    if(user){
        res.status(200).send(user)
    }
    else{
        res.status(404).send({
            error:'could not found user with such id'
        })
    }
    
        
})

route.post('/',async (req,res)=>{
    
    const user = await createAnonUser()
     //if somethind is succefully created we will send 201 request
    res.status(201).send(user)

})

module.exports = {
    usersRoute:route
}

