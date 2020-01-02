'use strict';

function average_uneven(collection) {
    var oddNumber = findOddNumber(collection);
    var sum = computeSum(oddNumber);
    var averageNumber = computeAvg(sum, oddNumber.length);
    return averageNumber; //TODO: 这里直接inline就好
}

function findOddNumber(collection) {
    var oddNumber = collection.filter(x => (x % 2 !== 0));
    return oddNumber; //TODO: 这里直接inline就好
}

function computeSum(collection) {
    var sum = collection.reduce(function(x, y) {
        return x + y;
    });
    return sum; //TODO: 这里直接inline就好
}

function computeAvg(sum, num) {
    return sum / num;
}
module.exports = average_uneven;
