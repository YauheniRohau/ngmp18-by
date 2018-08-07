'use strict';

const City = require("../../../models/City");

function getAllCities(req, res) {
  City.find({}, function(err, cities) {
    if (err) return res.json({ Error: err });
    return res.json(cities);
  });
}

function addCity(req, res) {
  const city = req.swagger.params.body.value;
  City.create(city, function(err, city) {
    if (err) return res.json({ Error: err });
    return res.json(city);
  });
};

function updateCityById(req, res) {
  const id = req.swagger.params.id.value;
  const city = req.swagger.params.body.value;

  return City.findByIdAndUpdate(
    id,
    city,
    {
      new: true,
      upsert: true,
    },
    function(err, city) {
      if (err) return res.json({ Error: err });
      return res.json(city);
    }
  );
};

function deleteCityById(req, res) {
  const id = req.swagger.params.id.value;

  return City.findByIdAndRemove(id, function(err, city) {
    if (err) return res.json({ Error: err });
    return res.json(city);
  });
};

module.exports = {
  getAllCities: getAllCities,
  addCity: addCity,
  updateCityById: updateCityById,
  deleteCityById: deleteCityById,
};
