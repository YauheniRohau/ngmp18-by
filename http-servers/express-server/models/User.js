import mongoose from '../config/mongoose';

const Schema = mongoose.Schema;

const User = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  }
});

export default mongoose.model('User', User);
