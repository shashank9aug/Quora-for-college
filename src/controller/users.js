const {Users} = require('../db/models')
const {genRandomUsername} = require('../utills/username')


async function creteAnonUser(){
    const user = await Users.create({
        username:genRandomUsername()        
    })

    return user
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