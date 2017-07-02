const getAll = require('./get-all');
const getId = require('./get-id');
const postId = require('./post-id');

module.exports = {
  // GET /items
  getAll: getAll,
  // GET /items/:id
  getId: getId,
  // POST /items
  postId: postId
};
