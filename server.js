var express = require('express'); 
var bodyParser = require('body-parser'); 
var morgan = require('morgan'); 
var mongoose = require('mongoose'); 

var app = express(); 


var stores = require('./routes/stores'); 

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
app.use(morgan('dev'));


app.get('/', function(req, res){
	res.send('please use /api/stores or /api/discounts'); 
}); 

app.use('/api/stores', stores)

app.listen(3030, function(){
	console.log('app running on port 3030'); 
})
