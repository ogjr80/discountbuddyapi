var express = require('express'); 
var router = express.Router(); 

//import the store model 
Store = require('../models/store.js');



//GEt Routes 
// -----------------------------------------
// Retrieve records for all stores in the db 

router.get('/', function(req, res){

	//Uses Mongoose schema to run the search (empty conditions)
	var query = Store.find({}); 
	query.exec(function(err, stores){
		if(err){
			res.send(err);
		}
		//if no errors are found, it responds with a JSON of all stores
		res.json(stores); 
	});

}); 



//Post Routes 
//--------------------------------------------
//Provides methods for saving new stores in the db 
// router.post('/', function(req, res){

// 	//Creates a new Store based on the Mongoose Schema and the post ody 
// 	var newstore = new Store(req.body); 

// 	newstore.save(function(err){
// 		if(err){
// 			res.send(err);
// 		}
// 		res.json(req.body);
// 	}); 
// }); 




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



