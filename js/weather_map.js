



// https://api.openweathermap.org/data/2.5/onecall?lat={29.423017}&lon={-98.48527}&exclude={hourly,daily}&appid={"91153175f66a5d3b4967f618fd8e6102"}

$.get("http://api.openweathermap.org/data/2.5/forecast", {
	APPID: "91153175f66a5d3b4967f618fd8e6102",
	lat:    29.423017,
	lon:   -98.48527,
	units: "imperial"
}).done(function(data) {
	console.log('5 day forecast', data);

});

mapboxgl.accessToken = "pk.eyJ1IjoiamVmZnJleTg0MCIsImEiOiJjbDluNTZtY2QwNGRxM29sN29lMjZkdDVjIn0.uIVExK3ADOwPLi3QpTx7Ug";
const map = new mapboxgl.Map({
	container: 'map', // container ID
	style: 'mapbox://styles/mapbox/streets-v11', // style URL
	center: [-117.60784696753407,33.57883646511674], // starting position [lng, lat]
	zoom: 9 // starting zoom
});