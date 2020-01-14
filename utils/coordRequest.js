const request = require('request');
const { mapboxKey } = require('../config');


const coordRequest = (query, callback) => {
  const urlLocation = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';
  const locationAPIKey = `.json?access_token=${mapboxKey}`;

  request(
    {
      url: urlLocation + encodeURI(query) + locationAPIKey
    },
    (error, response) => {
      if (error) {
        console.log('Unable to connect to weather service');
      } else if (response.body.message) {
        console.log('Location was not found, please try again');
      } else {
        const data = JSON.parse(response.body);
        const coords = data.features[0].center[1] + ',' + data.features[0].center[0];
        const placeName = data.features[0].place_name;
        callback(coords, placeName);
      }
    }
  )
}

module.exports = coordRequest;