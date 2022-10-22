(function () {

//when the element with the id "toggle-c" is clicked, the dd element with class invisible will be toggled
	$("#toggle-c").click(function () {
		$("dd").toggleClass("invisible");
	});

//when clicked the dt element will turn yellow
	$("dt").click(function () {
		$(this).css("background-color", "yellow")
	});

//when the element with the id of toggle new is clicked the last item in the
//list will be toggled classes to the value of highlight
	$("#toggle-new").click(function () {
		$("li:nth-child(4)").toggleClass("highlight");
	});

//whenever an h3 element is clicked all the li elements will be toggled to a class of bold
	$("h3").click(function () {
		$("li").toggleClass("bold");
	});


	$("li").click(function () {
		$('li:first-child').css('background-color', 'blue');
	});

//==================== BONUS ===================//

// Determines the behavior of the left painting
//	if the left image is clicked it will switch with the center image
$("div").children().first().on("click", function () {
		let centerPainting = $("#center").attr("src");
		let leftPainting = $("#left").attr("src");
		$("#center").attr("src", leftPainting);
		$("#left").attr("src", centerPainting);
	});

// Randomly produces a 0 or 1 then based on that value
// determines the behavior of the center painting
$("div").children().first().next().on("click", function () {
		let randomNumber = Math.floor(Math.random() * 2);
		let centerPainting = $("#center").attr("src");
		if (randomNumber === 0) {
			let leftPainting = $("#left").attr("src");
			$("#center").attr("src", leftPainting);
			$("#left").attr("src", centerPainting);
		} else {
			let rightPainting = $("#right").attr("src");
			$("#center").attr("src", rightPainting);
			$("#right").attr("src", centerPainting);
		}
	});

// Determines the behavior of the right painting
//	if the right image is clicked it will switch with the center image
$("div").children().last().on("click", function () {
		let centerPainting = $("#center").attr("src");
		let rightPainting = $("#right").attr("src");
		$("#center").attr("src", rightPainting);
		$("#right").attr("src", centerPainting);
	});

})();