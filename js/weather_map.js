// setting up global variables to call the data from Weather Map
let longitude = -96.7969
let latitude = 32.7763

// Calling initial getData function
getData();

// ------- Query the Weather Map API ----------------------------------------------

// String and Object Method:
// Using this method for the sake of readability
// Excluding minutely and hourly.
// Changing kelvins to imperial: Fahrenheit
// Defining the 'get' request as a function 'getData' in order to call it multiple times
function getData() {
	$.get("https://api.openweathermap.org/data/3.0/onecall", {
		APPID: OPEN_WEATHER_APPID,
		lat: latitude,
		lon: longitude,
		units: "imperial",
		exclude: "minutely, hourly",
		zoom: 14
	}).done(function (data) {
		console.log(data)
		handleResponse(data)
	});
}

// Setting up handle response to iterate through the returned data and populate the html:
function handleResponse(data) {
	let days = data.daily;
	let html = "";
	for (let i = 0; i < 5; i++) {
		let date = dateMaker(i);
		let iconCode = days[i].weather[0].icon;
		cardColor(iconCode);
		let tempHigh = Math.round(days[i].temp.max);
		let tempLow = Math.round(days[i].temp.min);
		let description = days[i].weather[0].description;
// Embedding into the div.card element using string method:
		let itemHtml = "<div style='align-items: center; margin-bottom: 5px; margin-top: 20px' class='card col-2' style='width: 15rem'>"
		itemHtml += '<span class="date-text">' + date + '</span>';
		itemHtml += "<img style='height: 50px; width: 50px;' src='http://openweathermap.org/img/w/" + iconCode + ".png'>"
		itemHtml += '<h5 class="highText">' + 'High ' + tempHigh + '</h5>';
		itemHtml += '<h5 class="lowText">' + 'Low ' + tempLow + '</h5>';
		itemHtml += '<p class="card-footer my-3">' + description + '</p>';
		itemHtml += '</div>';
		html += itemHtml;
	}
	$('#insertWeatherBoxes').html(html);

	//------- Map -----------------------------------------------------

	mapboxgl.accessToken = MAPBOX_API_KEY
	const map = new mapboxgl.Map({
		container: 'map', // container ID
		style: 'mapbox://styles/mapbox/dark-v10', // style URL
		center: [longitude, latitude], // starting position [lng, lat]
		zoom: 9 // starting zoom
	});

//Starting Draggable Marker (default point)
	let marker = new mapboxgl.Marker({
		draggable: true,
		color: "orange"
	})
		.setLngLat([longitude, latitude])
		.addTo(map);

// Adding functionality to draggable marker

	function onDragEnd() {
		let lngLat = marker.getLngLat();
		longitude = lngLat.lng;
		latitude = lngLat.lat;
		getData();
	}

	marker.on('dragend', onDragEnd);
}

// Pass the dateMaker function the index number (i) in the handleResponse.
// The setDate() method sets the day of the Date object relative
// to the beginning of the currently set month. -MDN
// The getDate() method returns the day of the month for the specified
// date according to local time. -MDN

function dateMaker(num) {
	let date = new Date();
	date.setDate(date.getDate() + num)
	return date.toDateString().slice(0, 10);
}

// Change the background of the Weather Cards depending on the iconCode
function cardColor(code) {
	$('.card').css("background-image", function () {
			if (code === "01d") {
				return "linear-gradient(45deg, skyblue, skyblue)";
			}
			if (code === "02d" || "03d" || "10d") {
				return "linear-gradient(45deg, skyblue, grey)";
			}
			if (code === "04d" || "09d" || "11d") {
				return "linear-gradient(45deg, lightgray, darkslategrey)";
			}
			if (code === "50d") {
				return "linear-gradient(45deg, gray, ghostwhite)";
			}
			if (code === "13d") {
				return "linear-gradient(45deg, lightgrey, whitesmoke)";
			} else {
				return "linear-gradient(45deg, skyblue, grey)";
			}

		}
	)
}

//------- Search by City geocode ----------------------------------------

$(".btn").click(function (e) {
	e.preventDefault()
	let searchInput = $("#input").val();
	geocode(searchInput, MAPBOX_API_KEY).then(function (data) {
		longitude = data[0];
		latitude = data[1];
		getData();
	})

})

// 	//js script
//

////
//
// 	// //displays map on page-start
// 	// mapboxgl.accessToken = MAPBOX_API_KEY;
// 	// const map = new mapboxgl.Map({
// 	// 	container: 'map', // container ID
// 	// 	style: 'mapbox://styles/mapbox/streets-v11', // style URL
// 	// 	center: [-98.48527, 29.423017], // starting position [lng, lat]
// 	// 	zoom: 9 // starting zoom
// 	// });
// 	// //displays map on page-end
//
// 	// //displays-marker
// 	// const marker = new mapboxgl.Marker({
// 	// 	color: "blue",
// 	// 	draggable: true
// 	// }).setLngLat([-98.48527, 29.423017])
// 	// 	.addTo(map);
// 	// //
//
// 	//refer to line 252 to get information of the marker
//
//
//
//
// 	$("#searchBtn").click(function (e) {
// 		e.preventDefault();
// 		console.log($("#searchBox").val());
//
// 		let inputStr = $("#searchBox").val();
//
// 		})
//
//

