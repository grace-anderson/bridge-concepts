const mongoose = require('mongoose');

const { Schema } = mongoose;

const keySchema = new Schema(
  {
    googleApi: {
      type: String,
    },
  }
);

const Key = mongoose.model('Key', keySchema);

module.exports = Key;