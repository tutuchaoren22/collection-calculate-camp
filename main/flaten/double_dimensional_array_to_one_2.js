'use strict';

function double_to_one(collection) {
    var oneDimensional = flattenToOneDimensional(collection);
    return deduplication(oneDimensional);
    // return deduplicationOneDimensional; //TODO: 这里变量直接inline
}

function flattenToOneDimensional(arr, result = []) {
    for (let item of arr) {
        if (Array.isArray(item))
            flattenToOneDimensional(item, result);
        else
            result.push(item);
    }
    return result;
}

function deduplication(array) {
    return array.filter(function(value, index, self) {
        return self.indexOf(value) === index;
    });
}
module.exports = double_to_one;