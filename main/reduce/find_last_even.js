'use strict';

function find_last_even(collection) {
    var evenAll = findAllEven(collection);
    return findLastEven(evenAll);
    // return lastEven; //TODO: 这里变量直接inline
}

function findAllEven(collection) {
    return collection.filter(item => (item % 2 === 0));
}

function findLastEven(collection) {
    return collection[collection.length - 1];
}

module.exports = find_last_even;