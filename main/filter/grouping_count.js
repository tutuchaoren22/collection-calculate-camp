'use strict';

function grouping_count(collection) {

    //在这里写入代码
    var res = {};
    for (var i = 0; i < collection.length; i++) {
        if (collection[i] in res) {
            res[collection[i]]++;
        } else {
            res[collection[i]] = 1;
        }
    }
    return res;
}

module.exports = grouping_count;