const request = require('request');
const { darkskyKey } = require('../config');

const weatherRequest = (coords, placeName) => {
  const urlWeather = `https://api.darksky.net/forecast/${darkskyKey}/`;

  request(
    { 
      url: urlWeather + coords,
      json: true 
    }, 
    (error, response) => {
      if (error) {
        console.log('Unable to connect to the weather service');
      } else if (response.body.error) {
        console.log(response.body.error);
      } else {
        const tempF = response.body.currently.temperature;
        const tempC = ((tempF - 32) * (5 / 9)).toFixed(2);
        const condition = response.body.currently.summary;
        const summary = response.body.hourly.summary;
        console.log('Current temperature in ' + placeName + ' is ' + tempC + 'C / '+ tempF + 'F.');
        console.log('Conditions are currently: ' + condition + '.')
        console.log('What you should expect: ' + summary)
      }
    }
  )
}

module.exports = weatherRequest;