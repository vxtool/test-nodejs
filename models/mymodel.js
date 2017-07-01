// get config
var config = require('../config');
// connect to the database
var Bookshelf = require('../lib/dbconnect')(config);
// define model
var myModel = Bookshelf.Model.extend({
    tableName: 'items'
});
// export collection module
module.exports = myModel;