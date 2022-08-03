const mongoose = require('mongoose');

const { Schema } = mongoose;
const Address = require('./Address');
const Client = require('./Client');
const Bridge = require('./Bridge');

const projectSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  reference: {
    type: String,
    required: true,
    trim: true
  },
  lat: {
    type: Number,
  },
  lng: {
    type: Number,
  },
  client:
  {
    type: Schema.Types.ObjectId,
    ref: 'Client',
  },
  bridge:
  {
    type: Schema.Types.ObjectId,
    ref: 'Bridge',
  }
});


const Project = mongoose.model('Project', projectSchema);

module.exports = Project;