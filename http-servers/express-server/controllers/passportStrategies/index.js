import local from './local';
import facebook from './facebook';
import twitter from './twitter';
import google from './google';

export default function(passport) {
  passport.serializeUser((user, done) => done(null, user));
  passport.deserializeUser((user, done) => done(null, user));

  passport.use('local', local());
  passport.use('facebook', facebook());
  passport.use('twitter', twitter());
  passport.use('google', google());
}
