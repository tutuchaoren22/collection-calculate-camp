'use strict';

function map_to_even(collection) {
    var mapDouble = collection.map(item => item * 2);
    return mapDouble; //TODO: 这里变量直接inline
}
module.exports = map_to_even;
