const app = require('./src/app')
require('dotenv').config()
const connectToDb = require('./src/db/db')
app.listen(3001,(req,res)=>{
    console.log('Server is starting ....')
})
connectToDb()