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
  },
  exist: {
    type: Boolean,
    default: false
  }
});

export default mongoose.model('Product', Product);
