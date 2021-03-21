const express = require('express')

const app = express()

// const db = require('./db/models');
// const db = models.db;
const {db} = require('./db/models')


// app.listen(4444,()=>{
//     console.log("server is stared on https://localhost:4444")
// })

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

