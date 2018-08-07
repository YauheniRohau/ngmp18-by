'use strict';

const Product = require("../../../models/Product");

function getAllProducts(req, res) {
  Product.find({}, function(err, products) {
    if (err) return res.json({ Error: err });
    return res.json(products);
  });
}

function addProduct(req, res) {
  const product = req.swagger.params.body.value;
  Product.create(product, function(err, product) {
    if(err) return res.json({ Error: err });
    return res.json(product);
  });
};

function getProductWithId(req, res) {
  const id = req.swagger.params.id.value;
  Product.findById(id, function(err, product) {
    if (err) return res.json({ Error: err });
    return res.json(product);
  });
};

function deleteProductById(req, res) {
  const id = req.swagger.params.id.value;
  return Product.findByIdAndRemove(id, function(err, product) {
    if (err) return res.json({ Error: err });
    return res.json(product);
  });
};

module.exports = {
  getAllProducts: getAllProducts,
  addProduct: addProduct,
  getProductWithId: getProductWithId,
  deleteProductById: deleteProductById,
};
