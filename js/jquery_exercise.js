
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


$("li").css("fontSize", "20px");

$("h1, p, li").css('background-color', '#FF0')

let contents = $('h1').html();
alert(contents);