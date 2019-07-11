'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
  console.log(Array.from(new Set(collectionA.filter(v => new Set(collectionB).has(v))));
  return Array.from(new Set(collectionA.filter(v => new Set(collectionB).has(v)))// [2]
  )

}
