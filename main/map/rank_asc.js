'use strict';
var rank_asc = function(collection) {
    return collection.sort(asceading);
};

function asceading(val1, val2) { //TODO: 起个好名字?
    return val2 - val1;
};
module.exports = rank_asc;