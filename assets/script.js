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
    .then(function (weather){
      console.log(weather);
      weather.main.temp
      console.log(weather.main.temp);
      let cityName = document.createElement('h3')
      cityName.textContent = `${input.value}`
      weatherContainer.append(cityName)
      let temp = document.createElement('p')
      temp.textContent = weather.main.temp
      weatherContainer.append(temp)
      let wind = document.createElement("p");
      wind.textContent = weather.wind.speed
      weatherContainer.append(wind)
      let humidity = document.createElement("p");
      humidity.textContent = weather.main.humidity
      weatherContainer.append(humidity)
      let uv = document.createElement('p')
      uv.textContent = weather.clouds.all
      weatherContainer.append(uv)




      // CountQueuingStrategy.textContent = ${input.value}
      // weatherContainer.append
      
      // for (let i = 0; i < weather.length; i++) {
      //   let listItem = weather[i]
      //   console.log(weather);
        
      // }
    });

};

// btn.addEventListener("click", getApi)


