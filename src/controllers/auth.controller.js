const userModel = require('../model/user.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
async function registerController(req,res){
    const {username,password} = req.body
    const existingUser = await userModel.findOne({
        username
    })
    if(existingUser){
        return res.status(409).json({
            message:'Username already exist'
        })
    }
    console.log(existingUser)
    const user = await userModel.create({
        username,password: await bcrypt.hash(password,10)
    })
    const token = jwt.sign({
        id:user._id
    },process.env.JWT_SECRET)
    res.cookie('token',token)
    res.status(201).json({
        message:'user created sucessfully',
        user
    })
}
async function LoginController(req,res){
    const {username,password} = req.body
    const existingUser = await userModel.findOne({
        username
    })
    if(!existingUser){
        return res.status(201).json({
            message:'User Does not exist'
        })
    }
    const isValidpassword = await bcrypt.compare(password,existingUser.password)
    if(!isValidpassword){
        return res.status(201).json({
            message:'Incorrect password'
        })
    }
    const token = jwt.sign({
        id:existingUser._id
    },process.env.JWT_SECRET)
    res.cookie('token',token)
    res.status(201).json({
        message:'user Logged in sucessfully',
    })
}

module.exports = {
    registerController,
    LoginController
    
}