'use strict';

function collect_max_number(collection) {
    //在这里写入代码
    var maxNumber = Math.max.apply(Math, collection);
    return maxNumber;
}

module.exports = collect_max_number;