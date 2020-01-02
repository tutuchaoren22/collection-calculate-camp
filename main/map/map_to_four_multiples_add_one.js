'use strict';
var map_to_four_multiples_add_one = function(collection) {
    return collection.map(item => item * 4 + 1);
    //return mapFourMmultiplesAddOne; //TODO: 这里变量直接inline
};

module.exports = map_to_four_multiples_add_one;