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
	location:{
		type: [Number], 
		require: true
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



storeSchema.index({location: '2dsphere'});


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
		location: [ store.longitude, store.latitude ],
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
		location: [store.longitude, store.latitude],
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



/*

db.stores.insert(
{
		"store_name": "Checkers", 
		"slogan": "Everything you want",
		"company": "Checkers", 
		"logo_url": "http://somelog.com/checkers.jpg", 
		"email": "info@checkers.co.za", 
		"phone": "555-5566", 
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
	)




/*
Discounts 
	name 
	price
	was
	description
	image_url
	createdAt
	expires


*/























