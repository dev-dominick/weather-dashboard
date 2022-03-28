let api = `https://api.openweathermap.org`
let apiKey = `5eaec850f935aee63f8f7d4cd1fb80d7`
let fetchLocation = document.getElementById("search-btn")


https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

function getApi(){
  let inputInfo = fetchLocation.value.trim();
  let apiUrl = `${api}/data/2.5/weather?q=${inputInfo}&appid=${apiKey}`
console.log(getApi)
  fetch(apiUrl)
    .then(function(response){
      return response.json();
      console.log(response)
    })


};

fetchLocation.addEventListener("submit", getApi)


