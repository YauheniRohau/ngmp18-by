import { Router } from 'express';
import { getRandomCity, getAllCities } from '../controllers/cities';

const router = Router();

router
  .get('/random', (req, res) => {
    return getRandomCity()
      .then(cities => {
        const randomIndex = Math.round(Math.random() * (cities.length - 1));
        return res.send(`Random city: ${JSON.stringify(cities[randomIndex])}`);
      })
      .catch(err => res.send(err));
  })
  .get('/', (req, res) => {
    return getAllCities()
      .then(cities => res.send(`All cities: ${JSON.stringify(cities)}`))
      .catch(err => res.send(err));
  });

export default router;
