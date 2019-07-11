'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {

  return Array.from(new Set(collectionA.filter(v => new Set(collectionB[0]).has(v)))// [2]
  )

}
