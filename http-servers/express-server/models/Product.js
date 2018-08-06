import mongoose from '../config/mongoose';

const Schema = mongoose.Schema;

const Product = new Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
  },
  price: {
    type: Number,
    min: 0,
    max: 100
  },
  exist: {
    type: Boolean,
    default: false
  }
});

export default mongoose.model('Product', Product);
