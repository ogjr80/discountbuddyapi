var express = require('express'); 
var router = express.Router(); 

//import the store model 
Store = require('../models/store.js');



//get all stores routes 
router.get('/', function(req, res){
	Store.getStores(function(err, stores){
		if(err){
			res.send(err); 
		}
		res.json(stores);
	});
}); 


//Get Single Store
router.get('/:id', function(req,res){
	Store.getStoreById(req.params.id, function(err, store){
		if(err){
			res.send(err);
		}
		res.json(store);
		console.log(store);
	});
}); 

//Add Store Route
router.post('/', function(req, res){
	var store = req.body; 
	Store.addStore(store, function(err, store){
		if(err){
			res.send(err);
		}
		res.json(store);
	});
});


//Update Store 
router.put('/:id', function(req, res){
	var id = req.params.id; 
	var store = req.body; 
	Store.updateStore(id,store,{}, function(err, store){
		if(err){
			res.send(err);
		}
		res.json(store);
	});
}); 



//Delete Store 
router.delete('/:id', function(id,res){
	var id = req.params.id; 
	Store.removeStore(id, function(err, store){
		if(err){
			res.send(err);

		}
		res.json(store); 
	});
}); 

module.exports = router; 

