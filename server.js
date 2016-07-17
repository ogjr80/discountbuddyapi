
//Dependencies 
//----------------------------------------------------------------

var express = require('express'); 
var bodyParser = require('body-parser'); 
var morgan = require('morgan'); 
var mongoose = require('mongoose'); 
var helmet = require('helmet'); 

//Create the Express App
//----------------------------------------------------------------
var app = express(); 




// Routes 
//----------------------------------------------------------------
var stores = require('./routes/stores'); 
var discounts = require('./routes/discounts'); 


//Set the connection to mongoDB 
//----------------------------------------------------------------
mongoose.connect('mongodb://localhost/discountdb', function(err){
	if(err){
		console.log('error connecting to mongo'); 
	}
	else 
	{
		console.log('connected to discountdb on mongo'); 
	}
}); 
var db = mongoose.connection; 



//Logging and Parsing  - Middlware 
//----------------------------------------------------------------
app.use(express.static(__dirname+'/client')); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
})); 
app.use(morgan('dev'));
app.use(helmet()); 


// Incase you hit the wrong routes 
//----------------------------------------------------------------
app.get('/', function(req, res){
	res.send('please use /api/stores or /api/discounts');
	//res.renderfile('index.html'); 
}); 



//Use the Routes 
//----------------------------------------------------------------
app.use('/api/stores', stores); 
app.use('/api/discounts', discounts); 


// Run the Server 
//----------------------------------------------------------------
app.listen(3020, function(){
	console.log('app running on port 3030'); 
})
