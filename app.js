const express = require('express');
const errorHandler = require('errorhandler');
const bodyParser = require('body-parser');

const middleware = require('./lib/middleware');
const mongodb = require('./lib/mongodb');

const routes = require('./routes');
const config = require('./config');

/**
 * Create Express server.
 */
const app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public'), {maxAge: 31557600000}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(middleware.extendedHttp());

/**
 * Set up routes
 **/
routes.setup(app);

/**
 * Set up routes
 **/
app.use(errorHandler());

// Connect to Mongo on start
mongodb.connect(config.db, function(err) {
  if (err) {
    console.log('Unable to connect to Mongo.');
    process.exit(1)
  } else {
    app.listen(app.get('port'), function() {
      console.log('Express server listening on port %d in %s mode', app.get('port'), app.get('env'));
    });
  }
});

module.exports = app;
