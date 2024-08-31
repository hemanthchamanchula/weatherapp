const axios = require('axios');

const apiKey = '38831d98f3d3d1c9bb58b92182a5e468'; // Replace with your OpenWeatherMap API key
const city = 'india'; // Replace with the city you want to check weather for
const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

axios.get(url)
  .then(response => {
    const weather = response.data;
    console.log(`Weather in ${weather.name}:`);
    console.log(`Temperature: ${weather.main.temp}°C`);
    console.log(`Description: ${weather.weather[0].description}`);
  })
  .catch(error => {
    console.log('Error fetching data:', error);
  });


  //If we want to run in local host then we should install express js module