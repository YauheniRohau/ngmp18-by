import express from 'express';
import parsedCookies from './middlewares/parsedCookies';
import parsedQuery from './middlewares/parsedQuery';

const app = express();
export default app
  .use(parsedCookies())
  .use(parsedQuery())
  .get('/ad', (req, res) => res.end('ewrfds'));

