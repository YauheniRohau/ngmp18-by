import { Router } from 'express';
import { getAllProducts, addProduct } from '../controllers/products';

const router = Router();

router
  .get('/', (req, res) => {
    return getAllProducts()
      .then(products => res.end(`All products: ${products}`));

  })
  .post('/', (req, res) => {
    return addProduct(req.body)
      .then(product => res.end(`Add product: ${JSON.stringify(product)}`));
    })
  .get('/:id', (req, res) => {
    res.end(`Product with id=${req.params.id}`)
  })
  .get('/:id/reviews', (req, res) => {
    res.end(`Reviews for product with id=${req.params.id}`)
  });

export default router;

