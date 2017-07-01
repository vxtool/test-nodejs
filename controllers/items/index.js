const getItems = require('./get-items');
const getItem = require('./get-item');
const saveItem = require('./save-item');

module.exports = {
    // GET /items/:id
    getItem: getItem,
    // GET /items
    getItems: getItems,
    // POST /items
    saveItem: saveItem
};
