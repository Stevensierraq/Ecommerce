const Order = require('../models/Order');


function index(req, res){
	Order.find({}).then(docs=>{
		res.json(docs);
	}).catch(err=>{
		console.log(err);
		res.json(err);
	})
}

function create(req, res, next){
	Order.create({
		products: req.body.products,
		totalPrice: req.body.totalPrice
	}).then(doc=>{
		console.log(doc);
		res.json(doc);
	}).catch(err=>{
		console.log('error en la creacion');
	});
}


module.exports = { index, create };