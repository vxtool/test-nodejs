const mongodb = require('../../lib/mongodb');

module.exports = function(req, res, next) {
  const collection = mongodb.get().collection('items');
  const query = {};
  const status = req.query.status;
  const scope = req.query.scope;

  if(status) {
    query.status = status;
  }

  if(scope) {
    query['criteria.scope.include'] = { '$in': [ scope ] };
  }

  collection.find(query).toArray(function(err, docs) {
    res.status(200).json({items: docs});
  })
};
