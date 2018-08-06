import mongoose from '../config/mongoose';

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
  }
});

export default mongoose.model('User', User);
