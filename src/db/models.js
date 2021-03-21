const Sequelize = require('sequelize')

const db = new Sequelize({
    dialect:'mysql',
    database:'quoradb',
    username:'quorauser',
    password:'quorasocial'
})

//while defining users use sigular plural combination

const Users = db.define('user',{

})
const Posts = db.define('post',{

})
const Comments = db.define('comment',{

})
const Likes = db.define('like',{

})

module.exports={
    db,
    Users,
    Posts,
    Comments,
    Likes   
}
