import app from './app';
const port = process.env.PORT || 8080;

//Models
import models from './models';

//Sync Database
models.sequelize.sync().then(function() {

  console.log('Nice! Database looks fine')
  app.listen(port, () => console.log(`App listening on port ${port}!`));

}).catch(function(err) {

  console.log(err, "Something went wrong with the Database Update!")

});

