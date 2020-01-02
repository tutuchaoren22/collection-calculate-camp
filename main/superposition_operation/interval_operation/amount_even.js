'use strict';

function amount_even(collection) {
    var findEvenCollection = findEvenInCollection(collection);
    var sum = sumOperation(findEvenCollection);
    return sum; //TODO: 这里直接inline就好
}

function findEvenInCollection(collection) {
    return collection.filter(item => item % 2 === 0);
}

function sumOperation(collection) {
    var sum = collection.reduce(function(x, y) {
        return x + y;
    });
    return sum; //TODO: 这里直接inline就好
}
module.exports = amount_even;
