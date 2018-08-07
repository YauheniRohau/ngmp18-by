import { User } from '../models';

export const getAllUsers = () => {
  return User.find({}, (err, users) => {
    if (err) return console.error(err);
  });
};

export const deleteUserById = (id) => {
  return User.findByIdAndRemove(id, (err, user) => {
    if (err) return console.error(err);
  });
};
