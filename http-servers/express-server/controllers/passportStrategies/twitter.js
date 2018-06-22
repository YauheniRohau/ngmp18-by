import { Strategy as TwitterStrategy } from 'passport-twitter';
import config from '../../config/config.json';

const { consumerKey, consumerSecret, callbackURL } = config.twitterStrategy;

const twitterAuth = () => {
  return new TwitterStrategy({
    consumerKey,
    consumerSecret,
    callbackURL
  }, (token, tokenSecret, profile, done) => {
    return done(null, profile, {
      code: 200,
      message: 'Twitter auth',
      data: {
        user: profile,
        token, tokenSecret,
      },
    });
  })
};

export default twitterAuth;
