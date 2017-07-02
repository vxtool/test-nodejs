const constants = require('../constants');
const contains = require('./contains');
const returnsError = require('./returns-error');

module.exports = {
  status: (response, value) => {
    const statusArray = value.toUpperCase().split(',');
    if (!contains.inArray(constants.status, statusArray)) {
      returnsError.filterError(response, value);
    } else {
      return { '$in': statusArray };
    }
    return false;
  },
  brand: (response, value) => {
    const brandArray = value.toUpperCase().split(',');
    if (!contains.inArray(constants.brand, brandArray)) {
      returnsError.filterError(response, value);
    } else {
      return { '$in': brandArray };
    }
    return false;
  },
  scope: (response, value) => {
    const scopeArray = value.toUpperCase().split(',');
    if (!contains.inArray(constants.scope, scopeArray)) {
      returnsError.filterError(response, value);
    } else {
      return { '$in': scopeArray };
    }
  },
};
