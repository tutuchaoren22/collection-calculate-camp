'use strict';
var str = ['0', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    'aa', 'ab', 'ac', 'ad', 'ae', 'af', 'ag', 'ah', 'ai', 'aj', 'ak', 'al', 'am', 'an', 'ao', 'ap',
    'aq', 'ar', 'as', 'at', 'au', 'av', 'aw', 'ax', 'ay',
    'az', 'ba'
];

function get_letter_interval_2(number_a, number_b) {
    //在这里写入代码
    var number_c = number_b - number_a;
    var res;
    if (number_c > 0) {
        res = f1(number_a, number_b);
    } else if (number_c < 0) {
        res = f2(number_a, number_b);
    } else {
        res = f3(number_a, number_b);
    }
    return res;
}


function f1(number_a, number_b) {
    var res = [];
    for (var i = number_a; i <= number_b; i++) {
        res.push(str[i]);
    }
    return res;
}

function f2(number_a, number_b) {
    var res = [];
    for (var i = number_a; i >= number_b; i--) {
        res.push(str[i]);
    }
    return res;
}

function f3(number_a, number_b) {
    return str[number_a];
}

module.exports = get_letter_interval_2;