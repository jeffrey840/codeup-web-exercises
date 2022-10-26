

//when the the user moves the marker to a new location the marker will update the cards
//whne the user input a location in the textbox find that location update cards

// https://api.openweathermap.org/data/2.5/onecall?lat={29.423017}&lon={-98.48527}&exclude={hourly,daily}&appid={"91153175f66a5d3b4967f618fd8e6102"}

$.get("http://api.openweathermap.org/data/2.5/forecast", {
	APPID: "91153175f66a5d3b4967f618fd8e6102",
	lat:    29.423017,
	lon:   -98.48527,
	units: "imperial"
}).done(function(data) {
	console.log('5 day forecast', data.list[0]['weather']);

});


mapboxgl.accessToken = "pk.eyJ1IjoiamVmZnJleTg0MCIsImEiOiJjbDluNTZtY2QwNGRxM29sN29lMjZkdDVjIn0.uIVExK3ADOwPLi3QpTx7Ug";
const map = new mapboxgl.Map({
	container: 'map', // container ID
	style: 'mapbox://styles/mapbox/streets-v11', // style URL
	center: [-98.48527,29.423017], // starting position [lng, lat]
	zoom: 9 // starting zoom
});

// var marker = new mapboxgl.Marker({
// 	draggable: true
// })
// 	.setLngLat([-98.4936, 29.4241])
// 	.addTo(map);
//
// // Marker sets long and lat here
// function markerDrag() {
// 	var coordinates = marker.getLngLat();
// 	var latitude = coordinates.lat.toString();
// 	var longitude = coordinates.lng.toString();
// 	$.get("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkSkyKey + "/" + latitude + ", " + longitude).done(function (data) {
// 		var weatherConditions = "";
// 		for (var i = 0; i < 3; i++) {
// 			var highTemp = data.daily.data[i].apparentTemperatureHigh;
// 			var lowTemp = data.daily.data[i].apparentTemperatureLow;
// 			var weather = data.daily.data[i];
// 			var weatherIcon = data.daily.data[i].icon;
// 			weatherConditions += "<div class=card>";
// 			weatherConditions += "<div class=card-body>";
// 			weatherConditions += "<img class=card-text src='" + typeOfWeather(weatherIcons, weatherIcon) + "'>";
// 			weatherConditions += "<h3 class=card-title><h5>High: </h5>" + Math.round(highTemp) + "° / <h5>Low: </h5>" + Math.round(lowTemp) + "°</h3>";
// 			weatherConditions += "<p class=card-text><h5>" + weatherIcon.charAt(0).toUpperCase() + weatherIcon.slice(1,weatherIcon.length) + "</h5></p>";
// 			weatherConditions += "<p class=card-text><h5>" + weather.summary + "</h5></p>";
// 			weatherConditions += "<p class=card-text><h5>Humidity: </h5>" + weather.humidity + "</p>";
// 			weatherConditions += "<p class=card-text><h5>Wind: </h5>" + weather.windSpeed + "</p>";
// 			weatherConditions += "<p class=card-text><h5>Pressure: </h5>" + weather.pressure + "</p>";
// 			weatherConditions += "</div>";
// 			weatherConditions += "</div>";
// 		}
// 		$("#weather").html(weatherConditions);
//
// 		console.log(data);
// 	});
// 	$("#location").html(location.charAt(0).toUpperCase() + location.slice(1,location.length));
// 	marker.setLngLat([longitude, latitude])
// }
//
// marker.on('dragend', markerDrag);
// $('#submit').click(function() {
// 	var location = $(userInput).val();
// 	geocode(location, mapboxToken).then(function (result) {
// 		var latitude = result[1].toString();
// 		var longitude = result[0].toString();
// 		$.get("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkSkyKey + "/" + latitude + ", " + longitude).done(function (data) {
// 			var weatherConditions = "";
// 			for (var i = 0; i < 3; i++) {
// 				var highTemp = data.daily.data[i].apparentTemperatureHigh;
// 				var lowTemp = data.daily.data[i].apparentTemperatureLow;
// 				var weather = data.daily.data[i];
// 				var weatherIcon = data.daily.data[i].icon;
// 				weatherConditions += "<div class=card>";
// 				weatherConditions += "<div class=card-body>";
// 				weatherConditions += "<img class=card-text src='" + typeOfWeather(weatherIcons, weatherIcon) + "'>";
// 				weatherConditions += "<h3 class=card-title><h5>High: </h5>" + Math.round(highTemp) + "° / <h5>Low: </h5>" + Math.round(lowTemp) + "°</h3>";
// 				weatherConditions += "<p class=card-text><h5>" + weatherIcon.charAt(0).toUpperCase() + weatherIcon.slice(1,weatherIcon.length) + "</h5></p>";
// 				weatherConditions += "<p class=card-text><h5>" + weather.summary + "</h5></p>";
// 				weatherConditions += "<p class=card-text><h5>Humidity: </h5>" + weather.humidity + "</p>";
// 				weatherConditions += "<p class=card-text><h5>Wind: </h5>" + weather.windSpeed + "</p>";
// 				weatherConditions += "<p class=card-text><h5>Pressure: </h5>" + weather.pressure + "</p>";
// 				weatherConditions += "</div>";
// 				weatherConditions += "</div>";
// 			}
// 			$("#weather").html(weatherConditions);
//
// 			console.log(data);
// 		});
// 		map.flyTo({ center:result,zoom:10});
// 		$("#location").html(location.charAt(0).toUpperCase() + location.slice(1,location.length));
// 		marker.setLngLat([longitude, latitude])
// 	});
// });