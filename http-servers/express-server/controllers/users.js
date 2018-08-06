import { User } from '../models';

const getAllUsers = () => {
  return User.find({}, (err, users) => {
    if (err) return console.error(err);
    console.log(users);
  });
};

export default getAllUsers;
