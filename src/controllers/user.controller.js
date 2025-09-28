const ssModel = require('../model/ss.model')
const jwt = require('jsonwebtoken')
const generateCaption = require('../services/ai.service')
const uploadfile = require('../services/upload.service')
const { v4:uuidv4} = require('uuid')

postController= async(req,res)=>{
    const file = req.file
    console.log('file recieved',file)
    const base64ImageFile = new Buffer.from(file.buffer).toString('base64')
    const caption = await generateCaption(base64ImageFile)
    const result = await uploadfile(file.buffer,`${uuidv4()}`)
    console.log(result)
    const post = await ssModel.create({
        caption:caption,
        image:result.url,
        user:req.user._id
    })
    res.json({
        message:post
    })    
}

module.exports = {
    postController
}