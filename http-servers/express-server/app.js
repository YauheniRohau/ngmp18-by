import express from 'express';
import parsedCookies from './middlewares/parsedCookies';

const app = express();
export default app
  .use(parsedCookies())
  .get('/', (req, res) => res.end('ewrfds'));

