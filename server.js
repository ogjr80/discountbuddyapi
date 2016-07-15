var express = require('express'); 
var bodyParser = require('body-parser'); 
var morgan = require('morgan'); 
var mongoose = require('mongoose'); 
var helmet = require('helmet'); 

var app = express(); 


var stores = require('./routes/stores'); 
var discounts = require('./routes/discounts'); 

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

app.use(express.static(__dirname+'/client')); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
})); 
app.use(morgan('dev'));
app.use(helmet()); 

app.get('/', function(req, res){
	res.send('please use /api/stores or /api/discounts');
	//res.renderfile('index.html'); 
}); 

app.use('/api/stores', stores); 
app.use('/api/discounts', discounts); 

app.listen(3020, function(){
	console.log('app running on port 3030'); 
})
