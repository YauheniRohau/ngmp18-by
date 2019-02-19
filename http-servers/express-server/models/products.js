'use strict';
module.exports = (sequelize, DataTypes) => {
  var Products = sequelize.define('Products', {
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    price: DataTypes.INTEGER,
    exist: DataTypes.BOOLEAN
  }, {});
  Products.associate = function(models) {
    // associations can be defined here
  };
  return Products;
};
