module.exports = {
  inArray: (array, it) => {
    if(array.constructor !== Array) {
      return false;
    }
    if(it) {
      if(it.constructor === Array) {
        for(let item of it) {
          if (array.includes(item)){
            return true;
          }
        }
      } else {
        if (array.includes(it)){
          return true;
        }
      }
    }
    return false;
  }
};
