
//function to get location based on ip:
// USE 


$(".getWeather").click(function() {
//
    var zip = $(".zip").text();

//store weather api url in var
    var weatherApiUrl = "http://api.openweathermap.org/data/2.5/weather?zip=" + $(".zip").text() + ",us&appid=06fa8726f51bc5310311a7038630653d";
    //use json to call weather api, run function
    $.get(weatherApiUrl, function(weather) {
      //store temp response in var
      var temperature = weather.main.temp;
      //convert to farenheit
      temperature = (temperature - 273.18) * 1.8 + 32;
      temperature = parseFloat((temperature).toFixed(1));
      $('.temp').append(temperature + " " + "degrees Farenheit");
      var clouds = weather.weather[0].description;
      $('.clouds').append(clouds);
      var wind = weather.wind.speed;
      var direction = weather.wind.deg;
      var value = Math.floor((direction / 22.5) + .5);
      arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"]
      direction = arr[(value % 16)];
      $('.wind').append(direction);
      $('.wind').append(" " + wind + " " + "MPH");
    });
//  }, "jsonp");
//};
});
