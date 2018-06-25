import { Router } from 'express';
import getAllUsers from '../controllers/users';

const router = Router();

router
  .get('/', (req, res) => {
    return getAllUsers()
      .then(users =>
        res.send(`All users: ${users}`))
      .catch(err => res.send(err));
  });

export default router;
