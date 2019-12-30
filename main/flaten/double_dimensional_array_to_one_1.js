'use strict';

function double_to_one(collection) {

    //在这里写入代码
    var res = flatten(collection);
    return res
}

function flatten(arr, result = []) {
    for (let item of arr) {
        if (Array.isArray(item))
            flatten(item, result)
        else
            result.push(item)
    }
    return result
}

module.exports = double_to_one;