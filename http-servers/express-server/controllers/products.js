import db from '../models';

export const getAllProducts = () => {
  return db.Products.findAll();
};

export const addProduct = ({ name, type, price, exist }) => {
  return db.Products.create({ name, type, price, exist });
};

export const getProductWithId = (id) => {
  return db.Products.findAll({
    where: { id },
  });
};

