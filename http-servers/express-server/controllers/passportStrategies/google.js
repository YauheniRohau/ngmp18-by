import { OAuth2Strategy as GoogleStrategy } from 'passport-google-oauth';
import config from '../../config/config.json';

const { clientID, clientSecret, callbackURL } = config.googleStrategy;

const googleAuth = () => {
  return new GoogleStrategy({
    clientID,
    clientSecret,
    callbackURL,
  }, (accessToken, refreshToken, profile, done) => {
    return done(null, profile, {
      code: 200,
      message: 'Google auth',
      data: {
        profile,
        accessToken,
        refreshToken,
      },
    });
  })
};

export default googleAuth;
