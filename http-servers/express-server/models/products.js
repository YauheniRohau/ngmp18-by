'use strict';
module.exports = (sequelize, DataTypes) => {
  var Products = sequelize.define('Products', {
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    email: DataTypes.STRING,
    price: DataTypes.INTEGER,
    reviews: DataTypes.STRING,
    exist: DataTypes.BOOLEAN
  }, {});
  Products.associate = function(models) {
    // associations can be defined here
  };
  return Products;
};