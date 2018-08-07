const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/homework7');

const db = mongoose.connection;

db.on('error', (err) => console.info('Connection error: ', err.message));
db.on('open', (a) => {
  console.info(a, 'Connected to MongoDB');
});

module.exports = mongoose;
