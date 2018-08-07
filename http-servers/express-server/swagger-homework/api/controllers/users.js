'use strict';

const User = require("../../../models/User");

function getAllUsers(req, res) {
  User.find({}, function(err, users) {
    if (err) return res.json({ Error: err });
    return res.json(users);
  });
};

function deleteUserById(req, res) {
  const id = req.swagger.params.id.value;
  return User.findByIdAndRemove(id, function(err, user) {
    if (err) return res.json({ Error: err });
    return res.json(user);
  });
};

module.exports = {
  getAllUsers: getAllUsers,
  deleteUserById: deleteUserById,
};
