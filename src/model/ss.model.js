const mongoose = require('mongoose')

const ssSchema = new mongoose.Schema({
    image:String,
    caption:String,
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    }
})

const ssModel = mongoose.model('posts',ssSchema)

module.exports = ssModel