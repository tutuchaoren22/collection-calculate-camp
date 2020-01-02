'use strict';

function hybrid_operation_to_uneven(collection) {
    var oddNumber = findOddNumber(collection);
    var afterMultiplyThreeAddTwo = multiplyThreeAddTwo(oddNumber);
    return sumOperation(afterMultiplyThreeAddTwo);
    // return sum; //TODO: 这里直接inline就好
}

function findOddNumber(collection) {
    return collection.filter(x => (x % 2 !== 0));
    // return oddNumber; //TODO: 这里直接inline就好
}

function multiplyThreeAddTwo(collection) {
    return afterMultiplyThreeAddTwo = collection.map(item => (item * 3 + 5));
    // return afterMultiplyThreeAddTwo; //TODO: 这里直接inline就好
}

function sumOperation(collection) {
    return collection.reduce(function(x, y) {
        return x + y;
    });
    // return sum; //TODO: 这里直接inline就好
}
module.exports = hybrid_operation_to_uneven;