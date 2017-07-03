module.exports = {
  inArray: (array, it) => {
    if(!array || array.constructor !== Array) {
      return false;
    }
    if(it) {
      if(it.constructor === Array) {
        for(let item of it) {
          if (array.includes(item)){
            return true;
          }
        }
      } else if(it.constructor === String) {
        if (array.includes(it)){
          return true;
        }
      }
    }
    return false;
  }
};
