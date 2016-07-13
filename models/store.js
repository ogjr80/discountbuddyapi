var mongoose = require('mongoose'); 

var storeSchema = mongoose.Schema({
	store_name: {
		type: String, 
		required: true
	}, 
	company: {
		type: String
	},
	logo_url: {
		type: String
	},
	email: {
		type: String
	},
	phone: {
		type: String
	}, 
	slogan: {
		type: String 
	}, 
	loc: {
		type: {
			type: String
		}, 
		coordinates: []
	}, 
	area: {
		type: String
	}, 
	address:{
		street: String, 
		suburb: String, 
		city: String,
		province: String, 
		postalcode: String
	}, 
	createAt: {
		type: Date, 
		default: Date.now
	},
}); 
storeSchema.index({loc: '2dsphere'});


var Store = module.exports = mongoose.model('Store', storeSchema); 

//Get Stores
module.exports.getStores = function(callback, limit){
	Store.find(callback).limit(limit).sort([['store_name', 'ascending']]); 
}


//Get Store
module.exports.getStoreById = function(id, callback){
	Store.findById(id, callback); 
}

// Add Store
module.exports.addStore = function(store, callback){
	var add = {
		store_name: store.store_name, 
		slogan: store.slogan, 
		company: store.company, 
		logo_url: store.logo_url, 
		email: store.email, 
		phone: store.phone, 
		loc: { 
			type: "Point",
			coordinates: [ store.longitude, store.latitude ] 
		},
		address: {
			street: store.address.street, 
			suburb: store.address.suburb,
			city: store.address.city,
			province: store.address.province, 
			postalcode: store.address.postalcode
		}
	}
	Store.create(add, callback); 
}


// Update Store
module.exports.updateStore = function(id, store, options, callback){
	var query = {_id: id}; 
	var update = {
		store_name: store.store_name, 
		slogan: store.slogan, 
		company: store.company, 
		logo_url: store.logo_url, 
		email: store.email, 
		phone: store.phone, 
		loc: { 
			type: "Point",
			coordinates: [ store.longitude, store.latitude ] 
		},
		address: {
			street: store.address.street, 
			suburb: store.address.suburb,
			city: store.address.city,
			province: store.address.province, 
			postalcode: store.address.postalcode
		}
	}
	Store.findOneAndUpdate(query, update, options, callback); 
}


//Remove Store 
module.exports.removeStore = function(id, callback){
	var query = {_id: id}; 
	Store.remove(query, callback); 
}





//Store schema
/*
storename
company
logo_url
email
phone
slogan
loc
area
address
 street
 city
 state
 zip
createdAt
*/

/*
{
		"store_name": "Game", 
		"slogan": "You are the difference",
		"company": "Game", 
		"logo_url": "http://somelog.com/logo.jpg", 
		"email": "info@game.co.za", 
		"phone": "555-5555", 
	    "loc" : { "type": "Point", "coordinates": [ -25.7831, 28.2752]},
        "address" : 
        {
			"street" : "main road",
			"suburb": "Midrand",
			"city": "Johannesburg",
			"province": "Gauteng", 
			"postalcode": "1685"
		}
	}
*/

























