//Bring in required files and packages
var express         = require( 'express' )
var app             = express()
var bodyParser      = require( 'body-parser' )

var config          = require( '../config' )
var User            = require( '../models/userModel')
var userController  = require( '../controllers/userController')


//Get an instance of the router
var authRouter = express.Router()
var noAuthRouter = express.Router()

//create basic router
noAuthRouter.route( '' )
  .post( userController.createUser )
  

authRouter.route( '/:user_id' )
  
  .put( userController.updateUser )
  .delete( userController.deleteUser )


//export the router
module.exports = {
	auth   : authRouter,
	noAuth : noAuthRouter
}