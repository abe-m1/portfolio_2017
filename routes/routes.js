//Bring in required packages
var express       = require('express')
var apiRouter     = express.Router()

var authCtrl      = require('../controllers/authController.js')
var userCtrl      = require('../controllers/userController.js')

// Route Files
var userRoutes    = require('./userRoutes.js')
var pageRoutes    = require('./pageRoutes.js')


// No Auth Routes
apiRouter.route('/signup').post( userCtrl.createUser )
apiRouter.route('/login').post( authCtrl.authenticateUser )
apiRouter.use('/users', userRoutes.noAuth)
apiRouter.use('/page', pageRoutes)

// Token MiddleWare
apiRouter.use(authCtrl.verifyToken)

// Auth Routes
apiRouter.use('/users', userRoutes.auth)


//export the router
module.exports = apiRouter