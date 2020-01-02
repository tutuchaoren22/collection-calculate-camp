'use strict';

function calculate_average(collection) {
    var oddIndexElements = findOddIndexElements(collection);
    var sum = computeSum(oddIndexElements);
    return computeAvg(sum, oddIndexElements.length);
    // return averageNumber; //TODO: 这里直接inline就好

};

function findOddIndexElements(collection) {
    return collection.filter(function(element, index) {
        if (index % 2 !== 0) {
            return element;
        }
    });
}

function computeSum(collection) {
    return collection.reduce(function(x, y) {
        return x + y;
    });
    // return sum; //TODO: 这里直接inline就好
}

function computeAvg(sum, num) {
    return sum / num;
}

module.exports = calculate_average;