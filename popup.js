const API_KEY = '#';
const CITY_NAME = 'patiala';
const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${API_KEY}&units=metric`;

function updateWeather() {
  fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {
      const location = data.name;
      const temperature = data.main.temp;
      const description = data.weather[0].description;

      document.querySelector('.location').textContent = location;
      document.querySelector('.temperature').textContent = `${temperature} °C`;
      document.querySelector('.description').textContent = description;
    })
    .catch((error) => {
      console.error('Error fetching weather data:', error);
    });
}

document.addEventListener('DOMContentLoaded', updateWeather);
