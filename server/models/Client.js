const mongoose = require('mongoose');

const { Schema } = mongoose;
const Address = require('./Address');

const clientSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  company: {
    type: String,
    trim: true
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String
  },
  address: Address.schema
});


const Client = mongoose.model('Client', clientSchema);

module.exports = Client;