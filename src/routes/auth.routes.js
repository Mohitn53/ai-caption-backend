const express = require('express')
const {registerController,LoginController} = require('../controllers/auth.controller')

const routes = express.Router()

routes.post('/register',registerController)
routes.post('/login',LoginController)

module.exports = routes