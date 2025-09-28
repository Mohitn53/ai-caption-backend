const express = require('express')
const app = express()
const authroutes = require('./routes/auth.routes')
const userroutes = require('./routes/user.routes')
const cookieParser = require('cookie-parser')


app.use(express.json())
app.use(cookieParser())
app.use('/auth',authroutes)
app.use('/api/user',userroutes)
module.exports = app