var API_KEY_GOOGLE = 'AIzaSyCQmcTCoxvxXpPHWwYQJG04bLkmtjbySjU';
var API_KEY_WEATHER = '86865297a8ae3ca28e0c00af2d260338';

function callGeocodingAPI(address, callback) {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function () {
		if (xhr.readyState != 4) {
			return;
		}
		if (xhr.status == 200) {
			var data = JSON.parse(xhr.responseText);
			if (data.results.length > 0) {
				var location = data.results[0].geometry.location;
				callback(location);
			} else {
				callback(null);
			}
		} else {
			callback(null);
		}
	};
	xhr.open('GET', 'https://maps.googleapis.com/maps/api/geocode/json?address=' + address + '&key=' + API_KEY_GOOGLE);
	xhr.send();
}

function callWeatherAPI(area, callback) {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function () {
		if (xhr.readyState != 4) {
			return;
		}
		if (xhr.status == 200) {
			var data = JSON.parse(xhr.responseText);
			callback({
				city: data.name,
				weather: data.weather[0].main,
				temperature: data.main.temp - 273.15,
				humidity: data.main.humidity,
				pressure: data.main.pressure,
				tempermin: data.main.temp_min - 273.15,
				tempermax: data.main.temp_max - 273.15
			});
		} else {
			callback(null);
		}
	};
	xhr.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=' + area + '&appid=' + API_KEY_WEATHER);
	xhr.send();
}