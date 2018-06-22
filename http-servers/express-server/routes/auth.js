import { Router } from 'express';
import jwt from 'jsonwebtoken';

import config from '../../../config/config.json'

const router = Router();

router
  .post('/', (req, res) => {
    const { email, username, password } = req.body;
    const { email: hardcodedEmail, password: hardcodedPassword } = config.credentials;
    const isCredsNotMatch = (email !== hardcodedEmail) || (password !== hardcodedPassword);

    if (isCredsNotMatch) {
      return res.send({
        code: 404,
        message: "Not found",
        data: "Email or password incorrect"
      });
    }

    const token = jwt.sign(
      {
        email,
        password,
      },
      config.jwtSecretKey,
    );

    return res.send({
      code: 200,
      message: "OK",
      data: {
        user: {
          email,
          username,
        }
      },
      token,
    });
  });

export default router;
