const mongoose = require('mongoose');

const { Schema } = mongoose;

const addressSchema = new Schema({
  unit: {
    type: String,
    trim: true
  },
  number: {
    type: String,
    required: true,
    trim: true
  },
  streetName: {
    type: String,
    required: true,
    trim: true
  },
  streetType: {
    type: String,
    required: true,
    trim: true
  },
  suburb: {
    type: String,
    required: true,
    trim: true
  },
  state: {
    type: String,
    trim: true
  },
  country: {
    type: String,
    trim: true
  }
});

const Address = mongoose.model('Address', addressSchema);

module.exports = Address;