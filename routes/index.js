const itemsController = require('../controllers/items/index');

module.exports.setup = function(app) {
  app.get('/', function(req, res){
    res.status(200).json({ message: 'Bem vindo!' });
  });

  app.get('/items', itemsController.getAll);
  app.get('/items/:id', itemsController.getId);
  app.post('/items', itemsController.postId);
};
