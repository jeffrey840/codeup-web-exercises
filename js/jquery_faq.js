
//when the element with the id "toggle-c" is clicked, the dd element with class invisible will be toggled
$( "#toggle-c" ).click(function() {
	$("dd" ).toggleClass( "invisible" );
});

//when clicked the dt element will turn yellow
$( "dt" ).click(function() {
	$( this ).css( "background-color", "yellow" )
});



$('li').last().css('background-color', '#FF0');