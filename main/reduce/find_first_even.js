'use strict';

function find_first_even(collection) {
    var evenAll = findAllEven(collection);
    var firstEven = findFirstEven(evenAll);
    return firstEven; //TODO: 这里变量直接inline
}

function findAllEven(collection) {
    return collection.filter(item => (item % 2 === 0));
}

function findFirstEven(collection) {
    return collection[0];
}
module.exports = find_first_even;
