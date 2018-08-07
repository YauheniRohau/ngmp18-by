import { Router } from 'express';
import { getAllUsers, deleteUserById } from '../controllers/users';

const router = Router();

router
  .get('/', (req, res) => {
    return getAllUsers()
      .then(users => {
        res.send(`All users: ${JSON.stringify(users)}`);
      })
      .catch(err => res.send(err));
  })
  .delete('/:id', (req, res) => {
    return deleteUserById(req.params.id)
      .then(user => res.end(`User with id=${user._id} deleted.`))
      .catch(err => res.send(err));
  });

export default router;
