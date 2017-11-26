const Product = require('../models/Product');
const upload = require('../config/upload');


function index(req, res){
	Product.find({}).then(docs=>{
		res.json(docs);
	}).catch(err=>{
		console.log(err);
		res.json(err);
	})
}

function create(req, res, next){
	Product.create({
		name: req.body.name,
		description: req.body.description,
		price: req.body.price
	}).then(doc=>{
		req.product = doc;
		next();
	}).catch(err=>{
		console.log('error');
		next(err);
	});
}

function multerMiddleware(){
		return upload.fields([
				{name: 'image', maxCount: 1}
			]);
}

function saveImage(req, res){
	if(req.product){

		const files = ['image'];
		const promises = [];

		files.forEach(imageType=>{
			if(req.files && req.files[imageType]){
				const path = req.files[imageType][0].path;
				promises.push(req.product.updateImage(path, imageType));
			}
		})
		
		Promise.all(promises).then(result=>{
					console.log(result);
					res.json(req.product);
				}).catch(err=>{
					console.log(err);
					res.json(err);
				});	

	}else{
		res.status(422).json({
			error: req.error || 'Could not save'
		});
	}
}


module.exports = { index, create, multerMiddleware, saveImage };