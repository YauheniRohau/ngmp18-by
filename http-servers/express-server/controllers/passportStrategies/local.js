import { Strategy as LocalStrategy } from 'passport-local';
import config from '../../config/config.json';

const credsIncorrect = {
  code: 404,
  message: 'Not found',
  data: 'Authenticatiion failed.'
};

const local = () => {
  return new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    session: false,
  }, (email, password, done) => {
    const { email: hardcodedEmail, password: hardcodedPassword } = config.credentials;
    const isCredsNotMatch = (email !== hardcodedEmail) || (password !== hardcodedPassword);

    if (isCredsNotMatch) {
      return done(null, false, credsIncorrect);
    }
    return done(null, config.credentials, config.credentials);
  });
}

export default local;
