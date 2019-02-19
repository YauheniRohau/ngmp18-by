import { Router } from 'express';
import {
  getAllProducts,
  addProduct,
  getProductWithId,
} from '../controllers/products';

const router = Router();

router
  .get('/', (req, res) => {
    return getAllProducts()
      .then(products => res.end(`All products: ${JSON.stringify(products)}`));
  })
  .post('/', (req, res) => {
    return addProduct(req.body)
      .then(product => res.end(`Add product: ${JSON.stringify(product)}`));
  })
  .get('/:id', (req, res) => {
    return getProductWithId(req.params.id)
      .then(product => res.end(`Product with id=${req.params.id}: ${JSON.stringify(product)}`));
  });

export default router;

