
//when the element with the id "toggle-c" is clicked, the dd element with class invisible will be toggled
$( "#toggle-c" ).click(function() {
	$("dd" ).toggleClass( "invisible" );
});

//when clicked the dt element will turn yellow
$( "dt" ).click(function() {
	$( this ).css( "background-color", "yellow" )
});


$( "#toggle-new" ).click(function() {
	$( "li:nth-child(4)" ).toggleClass( "highlight" );
});


$( "h3" ).click(function() {
	$( "li" ).toggleClass( "bold" );
});


$( "li" ).click(function() {
	$('li:first-child').css('background-color', 'blue');

});

