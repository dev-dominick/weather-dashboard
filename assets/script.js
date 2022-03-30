let api = 'https://api.openweathermap.org';
let apiKey = "5eaec850f935aee63f8f7d4cd1fb80d7";
let btn = document.getElementById("btn");
let input = document.querySelector("#city-search")
let weatherContainer = document.getElementById('weather-container')
let outPut = document.getElementById("cityOutPut");
let searchHistory = document.querySelector("#searchStorage")
let historyBtn = []
// console.log(input.value);
btn.addEventListener("click", getApi);

function getApi(){
  // let inputInfo = fetchLocation.value.trim();
  // console.log(e);
  var apiUrl = `${api}/geo/1.0/direct?q=${input.value}&limit=5&appid=${apiKey}`;

  // var apiUrl = `${api}/data/2.5/weather?q=${input.value}&appid=${apiKey}&units=imperial`;
  console.log(input.value);
  fetch(apiUrl)
    .then(function(response){
      return response.json();
      
    })
    .then(function(data){
      console.log(data);
      if (!data[0]) {
        alert("location not found");
      }
      else {
        appendSearch(input);
        weatherFetch(data[0]);
      }
    }).catch(function(err){
      console.error(err);
    });
  }

      // let lat = data.coord.lat
      // console.log(lat);
      // let lon = data.coord.lon
      // console.log(lon);

      // appendSearch(input);
     
    function weatherFetch(location){
      let { lat, lon } = location;
      // let city = location;
      
    
      let oneCall = `${api}/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,hourly&appid=${apiKey}`;
      fetch(oneCall)
        .then(function (res) {
          return res.json();
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
        

      
   });

    }



function appendSearch(input) {
  // var search = input.value;
  if (historyBtn.indexOf(input.value) !== -1) {
    return;
  }
  historyBtn.push(input.value);
  localStorage.setItem("city", JSON.stringify(historyBtn));
  btnCreate();
}


function btnCreate() {
  searchStorage.innerHTML= '';
  for (let i = historyBtn.length - 1; i >= 0; i--) {
    var btn = document.createElement("button");
    btn.setAttribute("type", "button");
    btn.setAttribute("aria-controls", "today forecast");
    btn.classList.add("history-btn", "btn-history");
    btn.setAttribute("data-search", historyBtn[i]);
    btn.textContent = historyBtn[i];
    searchStorage.append(btn);
    
  }
}

function loadHistory() {
  let getStorage = localStorage.getItem("city");
  if (getStorage) {
    historyBtn = JSON.parse(getStorage);
  }
  btnCreate();
}
loadHistory();
function searchClick(e) {
  if (!e.target.matches(".btn-history")) {
    return;
  }
  let btn = e.target;
  var input = btn.getAttribute("data-search");
  getApi(input);
}
searchStorage.addEventListener("click", searchClick);














