const express = require('express');

const OrdersController = require('../controllers/OrdersController');

let router = express.Router();

router.route('/')
	.get(OrdersController.index)
	.post(OrdersController.create);


module.exports = router;