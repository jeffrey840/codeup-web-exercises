(function() {
//displays the user input on the chrome console
$(document).keyup(function (event) {
			console.log(event.keyCode);
		});

let kkeys = [], konami = "38,38,40,40,37,39,37,39,66,65";

$(document).keydown(function(e) {

	kkeys.push( e.keyCode );

	if ( kkeys.toString().indexOf( konami ) >= 0 ) {

		$(document).unbind('keydown');

		alert("cheatcode activated")
	}

});

})();