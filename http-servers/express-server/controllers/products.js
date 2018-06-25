import db from '../models';

export const getAllProducts = () => {
  return db.Products.findAll()
    .then(products => {
      return JSON.stringify(products);
    });
};

export const addProduct = ({ name, type, price, exist }) => {
  return db.Products.create({ name, type, price, exist });
};

