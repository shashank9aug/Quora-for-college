const { Posts, Users } = require('../db/models')


//we want to createNewPosts and showallPosts

async function createNewPosts(userId,title,body){
    const post = await Posts.create({
        title,
        body,
        userId
    })   
   return post; 
}

// we can use username, title to show all the posts. 

async function showAllPosts(query){
    const posts = await Posts.findAll({
        include : [Users]
    })
    return posts;
}

//if there is relationship between post and user then we can include users at the time of query


module.exports = {
    createNewPosts,
    showAllPosts
}



//test with userId

// async function task(){
//     // console.log(
//     //     await createNewPosts(
//     //     1,
//     //     'awesome post', 
//     //     'this posts is all about awesomness🤣'
//     //   )
//     // )
//     // console.log(await createNewPosts(
//     //     2,
//     //     'chill post', 
//     //     'this posts is all about chilledLife🤣' 
//     //    )
//     // )
//     // console.log(await createNewPosts(
//     //     3, 
//     //     'funnny post', 
//     //     'this posts is all about Funnytalk🤣'
//     //     )
//     // )

//     const posts = await showAllPosts()
//     //show in array
//     for( p of posts){
//         console.log(`${p.title}\n author:${p.user.username}\n ${p.body}\n======\n`)
//     }  
// }

// task()