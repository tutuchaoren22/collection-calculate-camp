'use strict';

function calculate_elements_sum(collection) {
    return collection.reduce(function(x, y) {
        return x + y;
    });
    // return sum; //TODO: 这里变量直接inline
}

module.exports = calculate_elements_sum;