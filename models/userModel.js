//Bring in required packages
var mongoose        = require( 'mongoose' )
var bcrypt          = require( 'bcrypt-nodejs' )
var Schema          = mongoose.Schema


//Set up schema
var User = new Schema({

  email: String,
  username: ({ type: String, required: true, unique: true }),
  password: ({ type: String, select: false })
})

//Hash the password
User.pre('save', function(next){

  var user = this
  if (!user.isModified( 'password' )) {
    return next()
  } else {

    //generate the salt
    bcrypt.hash( user.password, null, null, function( err, hash ) {
      if ( err ) {
        return next( err )
      } else {

        //change the password to the hashed version
        user.password = hash
        next()
      }
    })
  }
})

//Method to compare entered password with that in DB
User.methods.comparePassword = function( password ) {
  var user = this
  return bcrypt.compareSync( password, user.password )
}

//Export the model
module.exports = mongoose.model( 'User', User )