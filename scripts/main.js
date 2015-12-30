$(document).ready(function(){
	console.log('jquery test');

	var resizeBody = function() {
		console.log('resized width');
		// console.log(window.innerHeight);
		var height = window.innerHeight;
		var width = window.innerWidth;

		$(document.body).css("height", height);
		console.log(document.body);
	}

	resizeBody();

	$( window ).resize(function(){
		resizeBody();
	});

});