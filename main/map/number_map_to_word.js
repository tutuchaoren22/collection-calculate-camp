'use strict';
var number_map_to_word = function(collection) {
    var mapWord = collection.map(item => String.fromCharCode(96 + item));
    return mapWord; //TODO: 这里变量直接inline
};

module.exports = number_map_to_word;
