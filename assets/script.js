let api = 'https://api.openweathermap.org';
let apiKey = "5eaec850f935aee63f8f7d4cd1fb80d7";
let city = document.getElementById("#search-btn");




function getApi(){
  // let inputInfo = fetchLocation.value.trim();
  var apiUrl = `${api}/data/2.5/weather?q=${city}&appid=${apiKey}`;

  fetch(apiUrl)
    .then(function(response){
      return response.json();
    })
    .then(function (weather){
      for (let i = 0; i < weather.length; i++) {
        let listItem = weather[i]
        console.log(weather);
        
      }
    });

};

city.addEventListener("click", getApi())


