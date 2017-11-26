const mongoose = require('mongoose');

let orderSchema = new mongoose.Schema({
	date: { type : Date, default: Date.now },
	products: Array,
	totalPrice: {
			type: Number,
			require: true
	}
});


let Order = mongoose.model('Order', orderSchema);

module.exports = Order;