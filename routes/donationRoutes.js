var router   = require( 'express' ).Router()
var donationCtrl = require( '../controllers/donationController.js' )

router.route( '/token' )
    .post( donationCtrl.getToken )

router.route( '/process' )
  .post( donationCtrl.processSale )

router.route( '/mail' )
  .post(donationCtrl.sendMail)
  

module.exports= router