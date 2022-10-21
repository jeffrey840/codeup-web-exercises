
//when the element with the id "toggle-c" is clicked, the dd element with class invisible will be toggled
$( "#toggle-c" ).click(function() {
	$("dd" ).toggleClass( "invisible" );
});

//when clicked the dt element will turn yellow
$( "dt" ).click(function() {
	$( this ).css( "background-color", "yellow" )
});

//when the element with the id of toggle new is clicked the last item in the
//list will be toggled classes to the value of highlight
$( "#toggle-new" ).click(function() {
	$( "li:nth-child(4)" ).toggleClass( "highlight" );
});

//whenever an h3 element is clicked all the li elements will be toggled to a class of bold
$( "h3" ).click(function() {
	$( "li" ).toggleClass( "bold" );
});


$( "li" ).click(function() {
	$('li:first-child').css('background-color', 'blue');
});

