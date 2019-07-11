'use strict';

module.exports = function countSameElements(collection) {
    let collectionB = collection.filter(v => v.length === 1);
    collection.filter(v => v.length === 3).map(x =>{
        collectionB = collectionB.concat(Array(Number(x.charAt(2))).fill(x.charAt(0)) );
    });
    return Array.from(new Set(collectionB)).map(v => {
        return {"key": v, "count": collectionB.filter(x => v === x).length}
    });
}
