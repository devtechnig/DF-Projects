// Check if hero image loads, log 404 if not
const heroImg = new Image();
heroImg.src = 'img/hero-bg.png';
heroImg.onerror = function() {
	console.error('404: hero-bg.png not found');
};
