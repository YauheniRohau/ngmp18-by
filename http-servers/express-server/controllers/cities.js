import { City } from '../models';

export const getRandomCity = (req, res) => {
  return City.find({}, (err, cities) => {
    if (err) return console.error(err);
    console.log(cities);
  });
}

export const getAllCities = (req, res) => {
  return City.find({}, (err, cities) => {
    if (err) return console.error(err);
    console.log(cities);
  });
}
