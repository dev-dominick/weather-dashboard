let api = 'https://api.openweathermap.org';
let apiKey = "5eaec850f935aee63f8f7d4cd1fb80d7";
let btn = document.getElementById("btn");
let input = document.querySelector("#city-search")
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
      document.getElementById("city-date")
      
      // for (let i = 0; i < weather.length; i++) {
      //   let listItem = weather[i]
      //   console.log(weather);
        
      // }
    });

};

// btn.addEventListener("click", getApi)


