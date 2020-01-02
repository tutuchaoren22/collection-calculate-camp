'use strict';

function hybrid_operation(collection) {
    var afterMultiplyThreeAddTwo = multiplyThreeAddTwo(collection);
    var sum = sumOperation(afterMultiplyThreeAddTwo);
    return sum; //TODO: 这里直接inline就好
}

function multiplyThreeAddTwo(collection) {
    var afterMultiplyThreeAddTwo = collection.map(item => (item * 3 + 2));
    return afterMultiplyThreeAddTwo; //TODO: 这里直接inline就好
}

function sumOperation(collection) {
    var sum = collection.reduce(function(x, y) {
        return x + y;
    });
    return sum; //TODO: 这里直接inline就好
}

module.exports = hybrid_operation;
