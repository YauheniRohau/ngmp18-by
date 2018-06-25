import db from '../models';

const getAllUsers = () => {
  return db.Users.findAll()
    .then(users => {
      return JSON.stringify(users);
    });
};

export default getAllUsers;
