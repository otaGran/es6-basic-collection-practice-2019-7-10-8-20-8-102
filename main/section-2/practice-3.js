'use strict';

module.exports = function countSameElements(collection) {
  let collectionB = collection.map(v => v.charAt(0));
  collection.filter(v => v.length >= 3).map(x =>{
    collectionB = collectionB.concat(Array((parseInt(x.substr(2)) -1 )  ).fill(x.charAt(0)) );
    console.log(parseInt(x.substr(2)));
  });
  return Array.from(new Set(collectionB)).map(v => {
    return {"name": v, "summary":
  });
}
