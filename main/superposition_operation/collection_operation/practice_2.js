'use strict';

function hybrid_operation_to_uneven(collection) {
    var oddNumber = findOddNumber(collection);
    var afterMultiplyThreeAddTwo = multiplyThreeAddTwo(oddNumber);
    return afterMultiplyThreeAddTwo; //TODO: 这里直接inline就好
}

function findOddNumber(collection) {
    var oddNumber = collection.filter(x => (x % 2 !== 0));
    return oddNumber; //TODO: 这里直接inline就好
}

function multiplyThreeAddTwo(collection) {
    var afterMultiplyThreeAddTwo = collection.map(item => (item * 3 + 2));
    return afterMultiplyThreeAddTwo; //TODO: 这里直接inline就好
}
module.exports = hybrid_operation_to_uneven;
