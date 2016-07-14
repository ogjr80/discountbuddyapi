var mongoose = require('mongoose'); 

//Discount Schema 
var discountSchema = mongoose.Schema({
	store: {
		type: mongoose.Schema.Types.ObjectId, 
		ref: 'Store'
	}, 
	product_name: {
		type: String, 
		required: true
	},
	price: {
		type: Number, 
		required: true
	},
	was: {
		type: Number
	}, 
	desc: {
		type: String
	}, 
	 pic: {
	 	type: String
	}, 
	createdAt: {
		type: Date, 
		default: Date.now
	}, 
	expiresAt: {
		type: Date
	}

}); 


var Discount = module.exports = mongoose.model('Discount', discountSchema); 


//Get Discounts 
module.exports.getDiscounts = function(callback, limit){
	Discount.find(callback).limit(limit).populate('store').sort([['createdAt', 'descending']])
	//Discount.find(callback).limit(limit).sort([['createdAt', 'descending']])

}

//Get Single Discount 
module.exports.getDiscountById = function(id, callback){
	var query = {_id: id}; 
	Discount.findOne(query, callback).populate('store'); 
}

// Add Discount 
module.exports.addDiscount = function(discount, callback){
	var add = {
		store: discount.store_id, 
		product_name: discount.product_name, 
		price: discount.price, 
		was : discount.was, 
		desc: discount.desc, 
		pic: discount.pic,
		expiresAt: discount.expiresat
	}

	Discount.create(add, callback); 
}


//Update Discount 
module.exports.updateDiscount = function(id, invoice, options, callback){
	var query = {_id: id}; 
	var update = {
		store: discount.store_id, 
		product_name: discount.product_name, 
		price: discount.price, 
		was : discount.was, 
		desc: discount.desc, 
		pic: discount.pic,
		expiresAt: discount.expiresat
	}
	Discount.findOneAndUpdate(query, update, options, callback); 
}


//Remove Discount 
module.exports.removeDiscount = function(id, callback){
	var query = {_id: id}; 
	Discount.remove(query, callback); 
}


//Get Store Discounts 
module.exports.getStoreDiscounts = function(store_id, callback, limit){
	var query = {store: store_id}; 
	Discount.find(query, callback).limit(limit).populate('store').sort([['createdAt', 'descending']]); 
}














