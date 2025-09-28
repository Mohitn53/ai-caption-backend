const express = require('express')
const routes = express.Router()
const userMiddleware = require('../middlewares/user.middleware')
const {postController}= require('../controllers/user.controller')
const multer = require("multer")
const upload = multer({storage:multer.memoryStorage()})


routes.post('/',userMiddleware,upload.single('image'),postController)

module.exports = routes