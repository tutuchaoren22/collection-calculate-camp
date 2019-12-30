'use strict';

function get_integer_interval_2(number_a, number_b) {
    //在这里写入代码
    res = calulation(number_a, number_b);
    return res;
}

function calulation(number_a, number_b) {
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
        if (i % 2 === 0) {
            res.push(i)
        }
    }
    return res;
}

function f2(number_a, number_b) {
    var res = [];
    for (var i = number_a; i >= number_b; i--) {
        if (i % 2 === 0) {
            res.push(i)
        }
    }
    return res;
}

function f3(number_a, number_b) {
    if (number_a % 2 === 0) {
        return number_a;
    } else {
        return [];
    }
}


module.exports = get_integer_interval_2;