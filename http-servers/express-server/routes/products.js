import { Router } from 'express';
import {
  getAllProducts,
  addProduct,
  getProductWithId,
  deleteProductById,
} from '../controllers/products';

const router = Router();

router
  .get('/', (req, res) => {
    return getAllProducts()
      .then(products => res.json(products))
      .catch(err => res.send(err));
  })
  .post('/', (req, res) => {
    return addProduct(req.body)
      .then(product => res.end(`Add product: ${JSON.stringify(product)}`))
      .catch(err => res.send(err));
  })
  .get('/:id', (req, res) => {
    return getProductWithId(req.params.id)
      .then(product => res.end(`Product with id=${req.params.id}: ${JSON.stringify(product)}`))
      .catch(err => res.send(err));
  })
  .delete('/:id', (req, res) => {
    return deleteProductById(req.params.id)
      .then(product => res.end(`Product with id=${product._id} deleted.`))
      .catch(err => res.send(err));
  });

export default router;

