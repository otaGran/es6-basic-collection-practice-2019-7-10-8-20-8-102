'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
  return Array.from(
      new Set(collectionA.map(x=>x.key).filter(v =>
        new Set(objectB.value).has(v))));
}
