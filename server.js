const express = require('express')
const logger = require('./logger.js')
const morgan = require('morgan')

const loginRoute=require('./Routes/login.js')
const usersRoute=require('./Routes/users.js')
const app=express()
const port=9000

app.use([
    express.static('./Welp'),
    morgan('dev'),
    logger,
    express.urlencoded({extended:false}),
    express.json()
    ])

app.use('/login',loginRoute)
app.use('/api/users',usersRoute)

app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
}) 