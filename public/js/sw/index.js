self.addEventListener('fetch', function(event) {
  // TODO: only respond to requests with a
  // url ending in ".jpg"
  if (event.request.url.match(/\.jpg/)) {
	  event.respondWith(
	    fetch('/imgs/dr-evil.gif')
	  );
  }
});