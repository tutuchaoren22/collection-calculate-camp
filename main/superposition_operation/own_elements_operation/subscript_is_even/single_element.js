'use strict';
var single_element = function(collection) {
    var oddIndexElements = findOddIndexElements(collection);
    console.log(oddIndexElements);
    var singleElements = deduplication(oddIndexElements);
    return singleElements;
};

function findOddIndexElements(collection) {
    return collection.filter(function(element, index) {
        if (index % 2 !== 0) {
            return element;
        }
    });
}

function deduplication(collection) {
    // var res = [];
    // for (var i in collection) {
    //     if (-1 === res.indexOf(collection[i])) {
    //         res.push(collection[i]);
    //         console.log(res);
    //     } else {
    //         var index = res.indexOf(collection[i]);
    //         res.splice(index, 1);
    //         console.log(res);
    //     }
    // }
    var array = [];
    for (var i = 0; i < collection.length; i++) {
        if (array.indexOf(collection[i]) === -1) {
            array.push(collection[i])
        }
    }
    return array;
    // return res;

}
// module.exports = single_element;
var collection_a = [1, 2, 3, 2, 5, 6, 21, 43, 12, 5];
var collection_b = [11, 11, 22, 11, 33, 11];
console.log(single_element(collection_b))