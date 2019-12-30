'use strict';

function get_integer_interval(number_a, number_b) {
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
        res.push(i)
    }
    return res;
}

function f2(number_a, number_b) {
    var res = [];
    for (var i = number_a; i >= number_b; i--) {
        res.push(i)
    }
    return res;
}

function f3(number_a, number_b) {
    return number_a;
}
module.exports = get_integer_interval;