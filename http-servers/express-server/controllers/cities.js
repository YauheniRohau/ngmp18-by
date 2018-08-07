import { City } from '../models';

export const getRandomCity = (req, res) => {
  return City.find({}, (err, cities) => {
    if (err) return console.error(err);
  });
}

export const getAllCities = (req, res) => {
  return City.find({}, (err, cities) => {
    if (err) return console.error(err);
  });
}

export const addCity = (city) => {
  return City.create(city);
};

export const updateCityById = (id, city) => {
  return City.findByIdAndUpdate(
    id,
    city,
    {
      new: true,
      upsert: true,
    },
  );
};

export const deleteCityById = (id) => {
  return City.findByIdAndRemove(id, (err, city) => {
    if (err) return console.error(err);
  });
};
