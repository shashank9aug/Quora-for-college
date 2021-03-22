const {Users} = require('../db/models')
const {genRandomUsername} = require('../utills/username')


async function createAnonUser(){
    const user = await Users.create({
        username:genRandomUsername()        
    })

    return user
} 

//error was created as when we try to find user by id t

async function getUserById(id){
    return await Users.findOne({where:{id}})
}

async function getUserByUsername(username){
   return await Users.findOne({where:{username}})
}

module.exports={
    createAnonUser,
    getUserById,
    getUserByUsername
}

// //test code 
// async function task(){
//     console.log(await creteAnonUser())
//     console.log(await creteAnonUser())
//     console.log(await creteAnonUser())
//     console.log(await creteAnonUser())
//     console.log(await creteAnonUser())
//     console.log(await creteAnonUser())
// }

// task()