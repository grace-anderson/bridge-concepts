const mongoose = require('mongoose');

const { Schema } = mongoose;

const locationSchema = new Schema({
  lat0: {
    type: Number,
    required: true,
  },
  lng0: {
    type: Number,
    required: true,
  },
  elev0: {
    type: Number,
  },
  lat1: {
    type: Number,
    required: true,
  },
  lng1: {
    type: Number,
    required: true,
  },
  elev1: {
    type: Number,
  },
  x0: {
    type: Number,
  },
  y0: {
    type: Number,
  },
  z0: {
    type: Number,
  },
  x1: {
    type: Number,
  },
  y1: {
    type: Number,
  },
  z1: {
    type: Number,
  }
});

const Location = mongoose.model('Location', locationSchema);

module.exports = Location;