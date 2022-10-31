
// setting up global variables to call the data from Weather Map
//latitude and longitude are  set to Dallas
let longitude = -96.7969
let latitude = 32.7763

// Calling initial getData function
getData();

// ------- Query the Weather Map API ----------------------------------------------

// String and Object Method:
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
	}).done(function (data) {
		// console.log(data)
		//calling the response function.
		response(data)
	});
}

// Setting up response to iterate through the returned data from the api and populate the html:
function response(data) {
	let days = data.daily;
	let html = "";
	for (let i = 0; i < 5; i++) {
		let date = dateMaker(i);
		let iconCode = days[i].weather[0].icon;
		let tempHigh = Math.round(days[i].temp.max);
		let tempLow = Math.round(days[i].temp.min);
		let hum = days[i].humidity;
		let wnd = days[i].wind_speed;
		let press = days[i].pressure;
		let description = days[i].weather[0].description;

// Embedding into the div.card element using string method:
		let itemHtml = "<div style='align-items: center; margin-bottom: 5px; margin-top: 20px' class='card col-2' style='width: 15rem'>"
		itemHtml += '<span class="date-text">' + date + '</span>';
		itemHtml += "<img style='height: 50px; width: 50px;' src='http://openweathermap.org/img/w/" + iconCode + ".png'>"
		itemHtml += '<h5 class="highText">' + 'High ' + tempHigh + '</h5>';
		itemHtml += '<h5 class="lowText">' + 'Low ' + tempLow + '</h5>';
		itemHtml += '<p class="card-footer my-1">' + description + '</p>';
		itemHtml += '<p class="card-footer my-1">' + 'humidity: '  + hum + '</p>';
		itemHtml += '<p class="card-footer my-1">' + 'wind: '  + wnd + '</p>';
		itemHtml += '<p class="card-footer my-1">' + 'pressure: '  + press + '</p>';
		itemHtml += '</div>';
		html += itemHtml;
	}
	$('#insertWeatherBoxes').html(html);

	//------- Map -----------------
	mapboxgl.accessToken = MAPBOX_API_KEY
	const map = new mapboxgl.Map({
		container: 'map', // container ID
		// style: 'mapbox://styles/mapbox/dark-v10', // style URL
		//gta style for gta
		style: 'mapbox://styles/adoucett/cjf5k84bp0p7t2rmiwvwikhyn',
		center: [longitude, latitude], // starting position [lng, lat]
		zoom: 10 // starting zoom
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


// Pass the dateMaker function the index number (i) in the response function.
// The setDate() method sets the day of the Date object relative
// to the beginning of the currently set month. -MDN
// The getDate() method returns the day of the month for the specified
// date according to local time. -MDN
//range from 1-31.

function dateMaker(num) {
	let date = new Date();
	date.setDate(date.getDate() + num)
	return date.toDateString().slice(0, 10);
}


//------- Search by City geocode ------------

$(".btn").click(function (e) {
	e.preventDefault()
	let searchInput = $("#input").val();
	geocode(searchInput, MAPBOX_API_KEY).then(function (data) {
		longitude = data[0];
		latitude = data[1];
		getData();
	})

})




