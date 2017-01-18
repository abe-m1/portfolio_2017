//Bring in required packages
var express       = require( 'express' )
var app           = express()
var bodyParser    = require( 'body-parser' )

var config        = require( '../config' )
var User          = require( '../models/userModel' )
var userController= require( '../controllers/userController' )
var authController= require( '../controllers/authController' )

//get an instance of the router
var router = express.Router()

// router.route( '/signup' )
//   .post( userController.createUser )

// router.route( '/users' )
//   .post( userController.createUser )

router.route( '/login' )
  .post( authController.authenticateUser )

//route middleware to verify token
router.use( authController.verifyToken )

//export the router
module.exports = router