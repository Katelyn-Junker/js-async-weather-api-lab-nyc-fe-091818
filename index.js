const API_KEY = "5f740c46b1f20bf3ef74ee861828ee8f" 

function handleFormSubmit(event) {
  //handle submit event
  const input = document.querySelector('#city')
  const city= input.value
  fetchCurrentWeather(city)
}

function fetchCurrentWeather(city) {
  //fetch current weather based on city
  fetch('http://api.openweathermap.org/data/2.5/weather?' + city + '&APPID=' + API_KEY)
  .then((response)=> response.json())
  .then((responseJson)=> displayCurrentWeather(responseJson))
}

function displayCurrentWeather(json) {
  //render current weather data to the DOM using provided IDs and json from API
  console.log(json)
  const temperatureCell = document.querySelector('#temp')
  temperatureCell.innerText = json.main.temp 
}


function fetchFiveDayForecast(city) {
  //fetch five day forecast data based on city
}

function displayFiveDayForecast(json) {
  //render five day forecast data to the DOM using provided IDs and json from API
}

function createChart(json) {
  //Bonus: render temperature chart using five day forecast data and ChartJS
}

document.addEventListener('DOMContentLoaded', function() {
  //add event listener here for form submission
  document.addEventListener('submit', function(event){
    event.preventDefault()
    handleFormSubmit(event)
  })
})
