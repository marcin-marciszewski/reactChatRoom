const mongoose = require('mongoose');

const MessageSchema = mongoose.Schema({
  content: {
    type: String,
    require: true
  },
  user: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('message', MessageSchema);
