const mongodb = require('../../lib/mongodb');
const utils = require('../../utils');

module.exports = function(req, res, next) {
  const collection = mongodb.get().collection('items');
  const query = {};
  const status = req.query.status;
  const brand = req.query.brand;
  const scope = req.query.scope;

  if(status) {
    query.status = utils.filters.status(res, status);
    if(!query.status) { return; }
  }

  if(brand) {
    query.brand = utils.filters.brand(res, brand);
    if(!query.brand) { return; }
  }

  if(scope) {
    query['criteria.scope.include'] = utils.filters.scope(res, scope);
    if(!query['criteria.scope.include']) { return; }
  }

  collection.find(query).toArray(function(err, docs) {
    res.status(200).json({items: docs});
  })
};
