import { Router } from 'express';

const router = Router();

router
    .get('/', (req, res) => {
      res.end('All users');
  });

export default router;
