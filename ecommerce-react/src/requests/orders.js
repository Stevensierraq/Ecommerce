function sendOrder(data){
	return fetch("http://localhost:8080/orders", {
		method: 'POST',
		body: JSON.stringify(data),
		headers:{
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		}
	}).then(data=>{
		return data.json();
	}).catch(console.log);
}

function getOrders(){
	return fetch("http://localhost:8080/orders").then(data=>{
		return data.json();
	}).catch(console.log);
}

export{ getOrders, sendOrder };