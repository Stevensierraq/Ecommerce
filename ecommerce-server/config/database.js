const mongoose = require('mongoose');

module.exports = {
	connect: ()=> mongoose.connect('mongodb://localhost/ecommerce_api'),
	connection: ()=>{
		if(mongoose.connection)
			return mongoose.connection;
		return this.connect();
	}
}