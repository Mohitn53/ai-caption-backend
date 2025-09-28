
const userModel = require('../model/user.model')
const jwt = require('jsonwebtoken')



async function userMiddleware(req,res,next){
    const token = req.cookies.token;
    if(!token){
        return res.status(201).json({
            message:"Unuthorized"
        })
    }
        const decoded =  jwt.verify(token,process.env.JWT_SECRET)
        const user = await userModel.findOne({
            _id:decoded.id
        })
        req.user = user
        next()
}

module.exports = userMiddleware