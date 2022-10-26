

//when the the user moves the marker to a new location the marker will update the cards
//whne the user input a location in the textbox find that location update cards

// https://api.openweathermap.org/data/2.5/onecall?lat={29.423017}&lon={-98.48527}&exclude={hourly,daily}&appid={"91153175f66a5d3b4967f618fd8e6102"}

$.get("https://api.openweathermap.org/data/2.5/forecast", {
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

let marker = new mapboxgl.Marker().setLngLat([restaurant.long, restaurant.lat]).addTo(map);
