document.getElementById("save").onclick = function() {
	var sex = document.getElementById("sex").value;
	var size = document.getElementById("size").value;
	var nike = document.getElementById("nike").checked;
	var adidas = document.getElementById("adidas").checked;
	var footlocker = document.getElementById("footlocker").checked;
	var stores = [nike, adidas, footlocker];
	chrome.storage.sync.set({'sex': sex}, function(){
		console.log('Settings saved');
	});	
	chrome.storage.sync.set({'size': size}, function(){
		console.log('Settings saved');
	});	
	chrome.storage.sync.set({'stores': stores}, function(){
		console.log('Settings saved');
	});	
	// chrome.storage.sync.set({'nike': nike}, function(){
	// 	console.log('Settings saved');
	// });
	// chrome.storage.sync.set({'adidas': adidas}, function(){
	// 	console.log('Settings saved');
	// });
	// chrome.storage.sync.set({'footlocker': footlocker}, function(){
	// 	console.log('Settings saved');
	//});
}
window.onload = function(){
	chrome.storage.sync.get('sex', function(data){
		document.getElementById('sex').value = data.sex;
	});	
	chrome.storage.sync.get('size', function(data){
		document.getElementById('size').value = data.size;
	});	
	chrome.storage.sync.get('stores', function(data){
		document.getElementById('nike').checked = data.stores[0];
		document.getElementById('adidas').checked = data.stores[1];
		document.getElementById('footlocker').checked = data.stores[2];
	});
	// chrome.storage.sync.get('adidas', function(data){
	// 	document.getElementById('adidas').checked = data.adidas;
	// });	
	// chrome.storage.sync.get('footlocker', function(data){
	// 	document.getElementById('footlocker').checked = data.footlocker;
	// });		
}
