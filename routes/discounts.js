var express = require('express'); 
var router = express.Router(); 

Store = require('../models/store.js'); 
Discount = require('../models/discount.js'); 

//Get all Discounts 
router.get('/', function(req, res){
	Discount.getDiscounts(function(err, discounts){
		if(err){
			res.send(err);
		}
		res.json(discounts); 
	});
}); 

//Get Single Invoice 
router.get('/:id', function(req, res){
	Discount.getDiscountById(req.params.id, function(err, discount){
		if(err){
			res.send(err);
		}
		res.json(discount); 
	}); 
}); 

//Add Discount 
router.post('/', function(req, res){
	var discount = req.body; 
	Discount.addDiscount(discount, function(err, discount){
		if(err){
			res.send(err);
		}
		res.json(discount);
	}); 
});


//Update Discount 
router.put('/:id', function(req, res){
	var id = req.params.id; 
	var discount = req.body; 
	Discount.updateDiscount(id, discount, {}, function(err, discount){
		if(err){
			res.send(err);
		}
		res.json(discount); 
	});
});


//Delete Discount 
router.delete('/:id', function(req, res){
	var id = req.params.id; 
	Discount.removeDiscount(id,function(err, discount){
		if(err){
			res.send(err); 
		}
		res.json(discount); 
	});
});



//Get all Discounts for a single Store
router.get('/store/:store_id', function(req, res){
	var store_id = req.params.store_id; 
	Discount.getStoreDiscounts(store_id, function(err, discounts){
		if(err){
			res.send(err); 
		}
		res.json(discounts); 
	});
});




module.exports = router; 
