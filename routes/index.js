const itemsController = require('../controllers/items/index');

module.exports.setup = function(app) {
  app.get('/items', itemsController.getItems);
  app.get('/items/:id', itemsController.getItem);
  app.post('/items', itemsController.saveItem);
};
