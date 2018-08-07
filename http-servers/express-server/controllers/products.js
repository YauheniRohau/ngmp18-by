import { Product } from '../models';

export const getAllProducts = () => {
  return Product.find({}, (err, products) => {
    if (err) return console.error(err);
  });
}

export const addProduct = (product) => {
  return Product.create(product);
};

export const getProductWithId = (id) => {
  return Product.findById(id);
};

export const deleteProductById = (id) => {
  return Product.findByIdAndRemove(id, (err, product) => {
    if (err) return console.error(err);
  });
};

