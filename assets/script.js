let api = 'https://api.openweathermap.org';
let apiKey = "5eaec850f935aee63f8f7d4cd1fb80d7";
let btn = document.getElementById("btn");
let input = document.querySelector("#city-search")
let weatherContainer = document.getElementById('weather-container')
let outPut = document.getElementById("cityOutPut");
let searchHistory = document.querySelector("#searchStorage")
// console.log(input.value);
btn.addEventListener("click", getApi, listCity);

function getApi(e){
  // let inputInfo = fetchLocation.value.trim();
  console.log(e);
  var apiUrl = `${api}/data/2.5/weather?q=${input.value}&appid=${apiKey}&units=imperial`;
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

     

      let oneCall = `${api}/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;
      fetch(oneCall)
        .then(function (weatherResponse) {
          return weatherResponse.json();
        })
        // .then(function (weather) {
        //   console.log(weather);
        // })
        .then(function (weather) {
          console.log(weather);
          weather.current.temp;
          console.log(weather.current.temp);

          let cityName = document.createElement("h3");
          cityName.textContent = `${input.value}`;
          weatherContainer.append(cityName);

          // searchHistory.append(cityName);
        

          let temp = document.createElement("p");
          temp.textContent = weather.current.temp;
          weatherContainer.append("Temperature:");
          weatherContainer.append(temp)
          

          let wind = document.createElement("p");
          wind.textContent = weather.current.wind_speed;
          weatherContainer.append("Wind Speed MPH")
          weatherContainer.append(wind);

          let humidity = document.createElement("p");
          humidity.textContent = weather.current.humidity;
          weatherContainer.append("Percent Humidity:")
          weatherContainer.append(humidity);

          let uv = document.createElement("p");
          uv.textContent = weather.current.uvi;
          weatherContainer.append("UV Index")
          weatherContainer.append(uv);
        })

      
   });

    };




$(".saveBtn").on("click", function () {
  let text = $(this).siblings(".description").val().trim();
  let time = $(this).parent().attr("id");
  localStorage.setItem(time, text);
});

$(timeBlock9).val(localStorage.getItem("9"));
$(timeBlock10).val(localStorage.getItem("10"));
$(timeBlock11).val(localStorage.getItem("11"));
$(timeBlock12).val(localStorage.getItem("12"));
$(timeBlock13).val(localStorage.getItem("13"));
$(timeBlock14).val(localStorage.getItem("14"));
$(timeBlock15).val(localStorage.getItem("15"));
$(timeBlock16).val(localStorage.getItem("16"));
$(timeBlock17).val(localStorage.getItem("17"));




function listCity() {
  let cityDisplay = `${input.value}`;
  
  outPut.append(cityDisplay)
}

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


