const API_KEY = "5f740c46b1f20bf3ef74ee861828ee8f" 

function handleFormSubmit(event) {
  //handle submit event
  const input = document.querySelector('#city')
  const city= input.value
  fetchCurrentWeather(city)
  fetchFiveDayForcast(city)
}

function fetchCurrentWeather(city) {
  //fetch current weather based on city
  fetch('api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=' + API_KEY)
  .then((response)=> response.json())
  .then((responseJson)=> displayCurrentWeather(responseJson))
}

function displayCurrentWeather(json) {
  //render current weather data to the DOM using provided IDs and json from API
  const temperatureCell = document.querySelector('#temp')
  temperatureCell.innerText = json.main.temp + '°F'
  const low = document.querySelector('#low')
  const high = document.querySelector('#high')
  const humidity= document.querySelector('#humidity')
  const cloudCover= document.querySelector('#cloudCover')
  
  low.innerText = json.main.temp_min + '°F'
  high.innerText= json.main.temp_max + '°F'
  humidity.innerText= json.main.humidity + '%'
  cloudCover.innerText= json.main.all + '%'
}


function fetchFiveDayForecast(city) {
  //fetch five day forecast data based on city
  fetch('api.openweathermap.org/data/2.5/forecast?q=' + city + '&APPID=' + API_KEY + '&units=imperial')
  .then((response)=> response.json())
  .then((responseJson)=> displayFiveDayForecast(responseJson))
}

function displayFiveDayForecast(json) {
  //render five day forecast data to the DOM using provided IDs and json from API
  console.log(json)
  const firstForecast =json.list[0]
  const div= document.createElement('div')
  div.innerHTML= '<p>'+ firstForecast.dt_txt + '</p><p>'+ firstForecast.main.temp_max+'</p><p>'+firstForecast.main.temp_max+'</p>'
  
  const aside = document.querySelector('aside')
  aside.appendChild(div)
  
  console.log(firstForecast)
  
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
