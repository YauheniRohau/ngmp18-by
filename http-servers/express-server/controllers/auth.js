import jwt from 'jsonwebtoken';
import passport from 'passport';

import config from '../config/config.json';
import strategies from './passportStrategies';

const credsIncorrect = {
  code: 404,
  message: 'Not found',
  data: 'Email or password incorrect',
};

strategies(passport);

export const standart = (req, res) => {
  const { email, username, password } = req.body;
  const { email: hardcodedEmail, password: hardcodedPassword } = config.credentials;
  const isCredsNotMatch = (email !== hardcodedEmail) || (password !== hardcodedPassword);

  if (isCredsNotMatch) {
    return res.send(credsIncorrect);
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
};

export const authPassport = (name) => (req, res) => {
  passport.authenticate(name, (err, user, info) => {
    if (err) {
      return res.send(err);
    }
    return res.send(info);
  })(req, res);
}
