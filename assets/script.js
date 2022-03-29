let api = 'https://api.openweathermap.org';
let apiKey = "5eaec850f935aee63f8f7d4cd1fb80d7";
let btn = document.getElementById("btn");
let input = document.querySelector("#city-search")
let weatherContainer = document.getElementById('weather-container')
// console.log(input.value);
btn.addEventListener("click", getApi);

function getApi(e){
  // let inputInfo = fetchLocation.value.trim();
  console.log(e);
  var apiUrl = `${api}/data/2.5/weather?q=${input.value}&appid=${apiKey}`;
  console.log(input.value);
  fetch(apiUrl)
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      console.log(data);
      let lat = data.coord.lat
      console.log(lat);
      let lon = data.coord.lon
      console.log(lon);
    })

    let oneCall = `${api}/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`
    fetch(oneCall)
    .then(function(weatherResponse){
      return weatherResponse.json();
    })
    .then(function(weather){
      console.log(weather);
    })


    // need to fetch onecall api and input lat and long coords into next fetch
    // .then(function (weather){
    //   console.log(weather);
    //   weather.main.temp
    //   console.log(weather.main.temp);
    //   let cityName = document.createElement('h3')
    //   cityName.textContent = `${input.value}`
    //   weatherContainer.append(cityName)
    //   let temp = document.createElement('p')
    //   temp.textContent = weather.main.temp
    //   weatherContainer.append(temp)
    //   let wind = document.createElement("p");
    //   wind.textContent = weather.wind.speed
    //   weatherContainer.append(wind)
    //   let humidity = document.createElement("p");
    //   humidity.textContent = weather.main.humidity
    //   weatherContainer.append(humidity)
    //   let uv = document.createElement('p')
    //   uv.textContent = weather.clouds.all
    //   weatherContainer.append(uv)




    //   // CountQueuingStrategy.textContent = ${input.value}
    //   // weatherContainer.append
      
    //   // for (let i = 0; i < weather.length; i++) {
    //   //   let listItem = weather[i]
    //   //   console.log(weather);
        
    //   // }
    // });

};

// GIVEN a weather dashboard with form inputs
// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history


// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index


// WHEN I view the UV index
// THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe


// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity


// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city


