const mongoose = require('mongoose');

const { Schema } = mongoose;

const bridgeSchema = new Schema({
  type: {
    type: String,
    required: true,
  },
  length: {
    type: String,
    required: true,
  },
  width: {
    type: String,
    required: true,
  },
  loadType: {
    type: String,
  },
  openToSuggestions: {
    type: Boolean,
    default: false
  },
});

const Bridge = mongoose.model('Bridge', bridgeSchema);

module.exports = Bridge;