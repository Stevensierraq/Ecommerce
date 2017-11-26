const mongoose = require('mongoose');
const uploader = require('./Uploader');

let productSchema = new mongoose.Schema({
	name: {
		type: String,
		require: true,
		unique: true
	},
	description: String,
	image: {
		type: String,
		default: "https://res.cloudinary.com/wuwei/image/upload/v1511658901/kkzlqfjqjpfn9xcwcm1h.png"
	},
	price: Number
});

productSchema.methods.updateImage = function(path, imageType){
	//subir imagen
	//guardar imagen
	return uploader(path)
	.then(secure_url => this.saveImageUrl(secure_url, imageType));
}

productSchema.methods.saveImageUrl = function(secure_url, imageType){
	this[imageType] = secure_url;
	return this.save();
}

let Product = mongoose.model('Product', productSchema);

module.exports = Product;