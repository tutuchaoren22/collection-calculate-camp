'use strict';
var map_to_three_multiples = function(collections) {
    return collections.map(item => item * 3);
    // return mapThreeMultiples; //TODO: 这里变量直接inline
};

module.exports = map_to_three_multiples;