const mongoose = require('../config/mongoose');

const Schema = mongoose.Schema;

const User = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
    min: 8,
    max: 20,
  },
  lastModifiedDate: Date,
});

User.pre('save', function(next) {
  const date = new Date();
  this.lastModifiedDate = date;
  next();
});

module.exports = mongoose.model('User', User);
