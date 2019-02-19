import db from '../models';

const getAllUsers = () => {
  return db.Users.findAll();
};

export default getAllUsers;
