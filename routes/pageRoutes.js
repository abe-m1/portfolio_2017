//Bring in required packages
var express         = require( 'express' )
var app             = express()
var bodyParser      = require( 'body-parser' )

var config          = require( '../config' )
var pageCtrl        = require( '../controllers/pageController')


//get an instance of the router
var router = express.Router()

router.route( '' )
	.get( pageCtrl.getPage )
	.post( pageCtrl.newPage )
	.patch( pageCtrl.changeImage )

module.exports = router