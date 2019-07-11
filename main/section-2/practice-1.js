'use strict';

module.exports = function countSameElements(collection) {
  return Array.from(new Set(collection)).map(v=>{
    return {"key":v,"count":collection.filter(x => v === x).length}
  });

}
