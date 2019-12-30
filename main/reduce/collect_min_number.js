'use strict';

function collect_min_number(collection) {
    //在这里写入代码
    var minNumber = Math.min.apply(Math, collection);
    return minNumber;
}

module.exports = collect_min_number;