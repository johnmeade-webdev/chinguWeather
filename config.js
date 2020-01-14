const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  darkskyKey: process.env.DARKSKY_KEY,
  mapboxKey: process.env.MAPBOX_KEY,
};