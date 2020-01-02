'use strict';

function amount_even(collection) {
    var findEvenCollection = findEvenInCollection(collection);
    return sumOperation(findEvenCollection);
    // return sum; //TODO: 这里直接inline就好
}

function findEvenInCollection(collection) {
    return collection.filter(item => item % 2 === 0);
}

function sumOperation(collection) {
    return collection.reduce(function(x, y) {
        return x + y;
    });
    // return sum; //TODO: 这里直接inline就好
}
module.exports = amount_even;