import { Router } from 'express';
import {
  getRandomCity,
  getAllCities,
  addCity,
  updateCityById,
  deleteCityById,
} from '../controllers/cities';

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
  })
  .post('/', (req, res) => {
    return addCity(req.body)
      .then(city => res.end(`Added city: ${JSON.stringify(city)}`))
      .catch(err => res.send(err));
  })
  .put('/:id', (req, res) => {
    return updateCityById(req.params.id, req.body)
      .then(city => res.end(`Updated city: ${JSON.stringify(city)}`))
      .catch(err => res.send(err));
  })
  .delete('/:id', (req, res) => {
    return deleteCityById(req.params.id)
      .then(city => res.end(`City with id=${city._id} deleted.`))
      .catch(err => res.send(err));
  });

export default router;
