import { Router } from 'express';

const router = Router();

router
    .get('/', (req, res) => {
      res.end('All products');
    })
    .post('/', (req, res) => {
      res.end(`Add product: ${JSON.stringify(req.body)}`);
    })
    .get('/:id', (req, res) => {
      res.end(`Product with id=${req.params.id}`)
    })
    .get('/:id/reviews', (req, res) => {
      res.end(`Reviews for product with id=${req.params.id}`)
  });

export default router;

