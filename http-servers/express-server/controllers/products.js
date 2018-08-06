import { Product } from '../models';

export const getAllProducts = (req, res) => {
  return Product.find({}, (err, products) => {
    if (err) return console.error(err);
    console.log(products);
  });
}

export const addProduct = ({ name, type, price, exist }) => {
  return Product.create({ name, type, price, exist });
};

export const getProductWithId = (id) => {
  return Product.findById(id);
};

