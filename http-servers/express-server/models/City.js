const mongoose = require('../config/mongoose');

const Schema = mongoose.Schema;

const City = new Schema({
  capital: {
    type: Boolean,
    default: false,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  country: {
    type: String,
  },
  location: {
    lat: {
      type: Number,
      default: 0
    },
    long: {
      type: Number,
      default: 0
    }
  },
  lastModifiedDate: Date,
});


City.pre('save', function(next) {
  const date = new Date();
  this.lastModifiedDate = date;
  next();
});

module.exports = mongoose.model('City', City);
