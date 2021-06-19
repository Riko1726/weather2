
  function displayWeather(result) {
    var city = document.getElementById('city');
    var weather = document.getElementById('weather');
    var temperature = document.getElementById('temperature');
    var humidity = document.getElementById('humidity');
    var pressure = document.getElementById('pressure');
    var tempermin = document.getElementById('tempermin');
    var tempermax = document.getElementById('tempermax');
  
    city.textContent = result.city;
    weather.textContent = result.weather;
    temperature.textContent = Math.floor(result.temperature);
    humidity.textContent = result.humidity;
    pressure.textContent = result.pressure;
    tempermin.textContent = Math.floor(result.tempermin);
    tempermax.textContent = Math.floor(result.tempermax);
    var img = document.getElementById("img");
    if (result.weather == "Clouds"){
      img.src = "../png/03d@2x.png";
    }
    if (result.weather == "Rain"){
      img.src = "../png/10d@2x.png";
    }
    if (result.weather == "Clear"){
      img.src = "../png/01d@2x.png";
    }
    if (result.weather == "Drizzle"){
      img.src = "../png/09d@2x.png";
    }
    if (result.weather == "Thunderstorm"){
      img.src = "../png/11d@2x.png";
    }
    if (result.weather == "Snow"){
      img.src = "../png/13d@2x.png";
    }
  }
  
  function getWeather() {
    var inputLatitude = document.getElementById('area');
    callWeatherAPI(inputLatitude.value, displayWeather);
  }