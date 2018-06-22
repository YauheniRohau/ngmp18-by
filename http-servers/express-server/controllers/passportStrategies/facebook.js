import { Strategy as FacebookStrategy } from 'passport-facebook';
import config from '../../config/config.json';

const { clientID, clientSecret, callbackURL } = config.facebookStrategy;

const facebookAuth = () => {
  return new FacebookStrategy({
    clientID,
    clientSecret,
    callbackURL
  }, (token, refreshToken, profile, done) => {
    return done(null, profile, {
      code: 200,
      message: 'Facebook auth',
      data: {
        user: profile,
        token, refreshToken,
      },
    });
  });
};

export default facebookAuth;
