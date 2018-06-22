import { Router } from 'express';
import passport from 'passport';

import  * as auth from '../controllers/auth';

const router = Router();

router.post('/', auth.standart);

router.post('/local', auth.authPassport('local'));

router.get('/facebook', passport.authenticate('facebook'));
router.get('/facebook/callback/', auth.authPassport('facebook'));

router.get('/twitter', passport.authenticate('twitter'));
router.get('/twitter/callback/', auth.authPassport('twitter'));

router.get('/google', passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));
router.get('/google/callback/', auth.authPassport('google'));

export default router;
