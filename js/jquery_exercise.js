
"use strict";



// $(function() {
// 		alert( 'The DOM has finished loading!' );
// });


// // step 7.
// window.onload = function(){
// 	alert('windown.onload');
// }
//
// function anotherFunction(){
// 	alert('another function just ran');
// }
//
// // step 1 - run anotherfunction
// anotherFunction();
//
// // step 2
// alert('global alert')
//
// // step 4
// $(function() {
// 	// step 5
// 	alert( 'The DOM has finished loading! -> jquery' );
// 	// step 6
// 	console.log("inside jquery fn")
// 	console.log($('#download-jquery-btn'));
// });
//
// // step 3
// console.log('global:')
// console.log($('#download-jquery-btn'));



// //adds solid red line to border
// $("*").css('border', 'solid 1px red')
//
// //========================= id selectors ====================//
//
// //highlights the contents inside the id of main head
// $("#main-head").css('background-color', '#FF0')
//
// //alerts the contents inside the span with an id of "i-span"
// // let contents = $('#i-span').html();
// // alert(contents);
//
// let contents = $('#').html();
// alert(contents);

// //========================= class selectors ====================//

// $(".codeup").css('border', 'solid 1px red')

// //========================= element selectors ====================//

// //changes the element li fontsize to 20px
// $("li").css("fontSize", "20px");
//
// //highlights the background of the h1/p/li elements
// $("h1, p, li").css('background-color', '#FF0')
//
// //displays an alert with the contents of h1
// let contents = $('h1').html();
// alert(contents);

// //========================= mouse events ====================//

// //when clicked the id of "main-head" is changed to blue
// $('#main-head').click(function() {
// 	$(this).css('background-color', 'blue');
// });
//
// //when dbclicked the contents of "p" is changed to a font size of 18px
// $('p').dblclick(function() {
// 	$(this).css("fontSize", "18px");
// });
//
// //when the contents of li are being hovered on, the text will turn red ,and when
// //it is not hovered on it will return to black
// $("li").hover(function(){
// 	$(this).css("color", "red");
// }, function(){
// 	$(this).css("color", "black");
// });



