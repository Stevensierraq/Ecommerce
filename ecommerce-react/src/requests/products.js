function getProducts(){
	return fetch("http://localhost:8080/products").then(data=>{
		return data.json();
	}).catch(console.log);
}

export{getProducts};