'use strict';

var str = ['0', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    'aa', 'ab', 'ac', 'ad', 'ae', 'af', 'ag', 'ah', 'ai', 'aj', 'ak', 'al', 'am', 'an', 'ao', 'ap',
    'aq', 'ar', 'as', 'at', 'au', 'av', 'aw', 'ax', 'ay',
    'az', 'ba'
];

function get_letter_interval(number_a, number_b) {
    //在这里写入代码
    if (number_a < number_b) {
        return increaseInterval(number_a, number_b);
    } else if (number_a > number_b) {
        return decreaseInterval(number_a, number_b);
    } else {
        return [str[number_a]];
    }
}

function increaseInterval(number_a, number_b) {
    var resultInterval = [];
    for (var i = number_a; i <= number_b; i++) {
        resultInterval.push(str[i]);
    }
    return resultInterval;
}

function decreaseInterval(number_a, number_b) {
    var resultInterval = [];
    for (var i = number_a; i >= number_b; i--) {
        resultInterval.push(str[i]);
    }
    return resultInterval;
}


module.exports = get_letter_interval;