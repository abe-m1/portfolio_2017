//Bring in packages
var express         = require( 'express' )
var app             = express()
var morgan          = require( 'morgan' )
var bodyParser      = require( 'body-parser' )
var mongoose        = require( 'mongoose' )
var cors            = require( 'cors' )
var path            = require( 'path' )

var config          = require( './config')
// var userRoutes      = require( './routes/userRoutes' )
// var authRoutes      = require( './routes/authRoutes' )
// var blogRoutes      = require( './routes/blogRoutes')
// var homePageRoutes      = require( './routes/homePageRoutes')
// var whoWeAreRoutes   = require( './routes/whoWeAreRoutes')
// var teamBiosRoutes   = require( './routes/teamBiosRoutes')


//set up database
mongoose.connect( config.database )

// MODELS
var Page = require( './models/pageModel.js' )

// app.set( 'views', path.join(__dirname, 'views'))
app.set( 'view engine', 'jade' )
app.use( express.static( path.join(__dirname, 'public')))

//configure bodyParser
app.use( bodyParser.urlencoded({ extended: true }) )
app.use( bodyParser.json() )

//configure cors
app.use( cors() )

//configure morgan
app.use( morgan( 'dev' ) )

//test route
// app.get('/', function( req, res ) {
//   res.json( { message: 'this is my app' })
// })

// app.get( '*', function( req, res) {
//   res.sendFile( path.join(__dirname + '/public/app/index.html' ));
// } );

app.get( '/', function( req, res ) {
  res.sendFile( __dirname + '/public/app/index.html' )
} )

//require routes
// app.use(authRoutes)
// app.use(userRoutes)
// app.use(blogRoutes)
// app.use(homePageRoutes)
var apiRoutes = require('./routes/routes.js')
app.use( '/api', apiRoutes)




app.listen( config.port, function( req, res ) {
  console.log( 'app listening on port: ' + config.port)
})
