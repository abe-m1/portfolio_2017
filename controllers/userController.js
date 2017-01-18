//Required models
var User = require( '../models/userModel')




//Functions
function createUser( req, res) {
  var user = new User()

  user.email      = req.body.email
  user.username   = req.body.username
  user.password   = req.body.password

  user.save( function( err, user ){
    if ( err ) {
      if ( err === 11000 ) {
        res.send({ success: false, message: 'user exists already' })
      } else {
        res.send( err )
      }
    } else {
      res.json({ message: 'user created' }, user )
    }
  })
}



function updateUser( req, res ) {
  User.findById( req.params.user_id, function( err, user ) {
    if ( err ) {
      res.send( err )
    } else {
      if ( req.body.name ) {
        user.name = req.body.name
      }
      if ( req.body.username ) {
        user.username = req.body.username
      }
      if ( req.body.password ) {
        user.password = req.body.password
      }
      user.save( function( err ) {
        if ( err ) {
          res.send( err )
        } else {
          res.json({ message: 'user updated' }, user )
        }
      })
    }
  })
}

function deleteUser( req, res ) {
  User.remove({
    _id: req.params.user_id
  }, function( err, user ) {
    if ( err ) {
      res.send( err )
    } else {
      res.json({ message: 'user deleted'})
    }
  })
}

module.exports = {
  createUser: createUser,
 
  
  updateUser: updateUser,
  deleteUser: deleteUser
}