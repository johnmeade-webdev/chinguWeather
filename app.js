const coordRequest = require('./utils/coordRequest.js');
const weatherRequest = require('./utils/weatherRequest.js');

const query = process.argv[2];

if (!query) {
  console.log("You must include a city to search for; please run again.");
} else {
  coordRequest(process.argv.slice(2), weatherRequest);
}