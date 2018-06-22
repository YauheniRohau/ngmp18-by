import express from 'express';
import bodyParser from 'body-parser';
import parsedCookies from './middlewares/parsedCookies';
import parsedQuery from './middlewares/parsedQuery';
import jwtVerify from './middlewares/jwtVerify';
import { products, users, auth } from './routes';

const app = express();

export default app
  .use(parsedCookies())
  .use(parsedQuery())
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: false }))
  .get('/', (req, res) => res.end('Home page'))
  .use('/auth', auth)
  .use(jwtVerify())
  .use('/api/products', products)
  .use('/api/users', users)
  .use((req, res) => res.status(404).send('Sorry can\'t find that!'));

