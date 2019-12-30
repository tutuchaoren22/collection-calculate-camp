'use strict';

function find_first_even(collection) {
    //在这里写入代码
    var evenAll = findAllEven(collection);
    var firstEven = findFirstEven(evenAll);
    return firstEven;
}

function findAllEven(collection) {
    return collection.filter(item => (item % 2 === 0));
}

function findFirstEven(collection) {
    return collection[0];
}
module.exports = find_first_even;