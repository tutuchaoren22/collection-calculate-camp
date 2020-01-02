'use strict';

function double_to_one(collection) {
    return flattenToOneDimensional(collection);
    //return oneDimensional; //TODO: 这里变量直接inline
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

module.exports = double_to_one;