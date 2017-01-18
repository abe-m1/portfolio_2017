//Required files and packages
var User    = require( '../models/userModel' )
var jwt     = require( 'jsonwebtoken' )
var config  = require( '../config' )
var localStorage = require( 'node-localstorage')


//Functions

function authenticateUser( req, res) {

  //find the user
  User.findOne({
    username: req.body.username
  }).select('name username password')
  .exec( function( err, user) {
    if ( err ) throw err

    if ( !user ) {
      res.json({ success: false, message: 'authentication failed. user not found' })
    } else if ( user) {
      //check if password matches
      var validPassword = user.comparePassword( req.body.password )
      if ( !validPassword) {
        res.json({ success: false, message: 'auth failed. wrong password' })
      } else {
        //if the user is found and password is correct
        //create a token
        var token = jwt.sign({
          name: user.name,
          username: user.username,
          id: user._id
        },
        config.secret, { expiresInMinutes: 1440 })






        //return the info including token as json
         res.json({
           success: true,
           message: 'your token',
           token: token,
           id: user._id,
           user: user.username
         })

      }
    }
  })
}

function verifyToken( req, res, next ) {

  //check header or url parameter or post parameter for token
  var token = req.body.token || req.param( 'token' ) || req.headers[ 'x-access-token' ]
  console.log('Hello', token)
  //decode token
  if ( token ) {
    //verifies secret
    jwt.verify( token, config.secret, function( err, decoded) {
      if ( err ) {
        return res.status(403).send({ success: false, message: 'failed to authenticate token' })
      } else {
        //if everything looks good, save dedcoded token for use in other routes
        req.decoded = decoded

        next()
      }
    })
  } else {
    //if there is no token
    //return an HTTP response of 403 and error message
    return res.status(403).send({ success: false, message: 'no token provided' })
  }
}

module.exports = {
  authenticateUser: authenticateUser,
  verifyToken:      verifyToken
}