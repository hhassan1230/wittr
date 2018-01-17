console.log("I'm Here in SW!");
self.addEventListener('fetch', function(event) {
	console.log(event.request);
});