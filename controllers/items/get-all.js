const mongodb = require('../../lib/mongodb');

module.exports = function(req, res, next) {
  const collection = mongodb.get().collection('items');

  collection.find().toArray(function(err, docs) {
    res.status(200).json({items: docs});
  })
};
