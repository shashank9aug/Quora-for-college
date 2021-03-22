const express = require('express')
const app = express()

// const db = require('./db/models');
// const db = models.db;
const {db} = require('./db/models')
const { usersRoute } = require('./routes/users')
const { postsRoute } = require('./routes/posts')

app.use('/api/users', usersRoute)
app.use('/api/posts', postsRoute)

app.use('/',express.static(__dirname+'/public'))


// app.listen(4444,()=>{
//     console.log("server is stared on https://localhost:4444")
// })
//Done in production only: db.sync({force:true})

db.sync()
   .then(()=>{
      app.listen(4444,()=>{
          console.log('server started on https://localhost:4444')
      })
   })
   .catch(()=>{
       console.error(new Error('could not start database'))
       console.error(err)
   })

