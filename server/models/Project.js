const mongoose = require('mongoose');

const { Schema } = mongoose;
const Address = require('./Address');
const Client = require('./Client');
const Bridge = require('./Bridge');
const User = require('./User');

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
  client:
  {
    type: Schema.Types.ObjectId,
    ref: 'Client',
  },
  bridge:
  {
    type: Schema.Types.ObjectId,
    ref: 'Bridge',
  },
  userId: {
    type: String,
  },
});


const Project = mongoose.model('Project', projectSchema);

module.exports = Project;