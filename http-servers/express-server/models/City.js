import mongoose from '../config/mongoose';

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
  lastModifiedDate: Date
});

export default mongoose.model('City', City);
