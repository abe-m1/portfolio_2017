//Bring in required packages
var mongoose      = require( 'mongoose' )
var Schema        = mongoose.Schema

//Setup blog schema
var Page = new Schema({
  name: { type: String },
  page: {type: Number, unique: false},
  positions: { type: Schema.Types.Mixed }
}, { strict: false } )

Page.index( { page: 1, pos: 1 }, { unique: true } )

Page.pre( 'save', function( next ) {
	console.log( 'Saving!' )
	next()
} )

Page.post( 'save', function( next ) {
	console.log( 'After save!', next )
	return next
} )

Page.methods.upSave = function( pos, url ) {
	var page = this
	page.positions[ pos ] = url
	console.log( 'New page', page )
	return page.save()
}

//Export the model
module.exports = mongoose.model( 'Page', Page)
