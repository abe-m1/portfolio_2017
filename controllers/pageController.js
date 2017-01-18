// var HomePage = require( '../models/homePageModel')
// var Blog =     require( '../models/blogModel')

//DECLARING VARIABLES
//===========================
var mongoose       = require( 'mongoose' )

var Page           = mongoose.model('Page')

//FUNCS
//===========================
function newPage( req, res ) {
	var page = req.body.page
	Page.create( page )
		.then( function( data ) {
			res.json( data )
		} )
		.catch( function( err ) {
			res.json( err )
		} )
}

function getPage( req, res ) {
	var id = req.headers.id
	var promise
	if ( id ) {
		promise = Page.findById( id ).exec()
	} else {
		promise = Page.find().exec()
	}
	promise
		.then( function( data ) {
			res.json( data )
		} )
		.catch( function( err ) {
			res.json( err )
		} )
}

function fUpdate( id, pos, img ) {
	var update = { $set: {} }
	update.$set[ 'positions.' + pos ] = img
	return Page.findOneAndUpdate( { page: id },
						update,
						{ multi: false, new: true }
						).exec()
						.then( function( page ) {
							console.log( 'Update page', page )
							return page
						} )

}

function changeImage( req, res ) {
	// TODO change to look for page name not num
	var pageNum = req.body.num
	var pos    = req.body.pos
	var img    = req.body.img

	var promise = fUpdate( pageNum, pos, img )

	promise.then( function( data ) {
			res.json( data )
		} )
		.catch( function( err ) {
			res.json( err )
		} )
}

module.exports = {
	newPage     : newPage,
	getPage      : getPage,
	changeImage : changeImage
}