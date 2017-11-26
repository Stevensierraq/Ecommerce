const express = require('express');

const productsController = require('../controllers/ProductsController');

let router = express.Router();

router.route('/')
	.get(productsController.index)
	.post(productsController.multerMiddleware(),
	 productsController.create,
	 productsController.saveImage);


module.exports = router;