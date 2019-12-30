'use strict';

function median_to_letter(collection) {
    var stra = ['0', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
        'aa', 'ab', 'ac', 'ad', 'ae', 'af', 'ag', 'ah', 'ai', 'aj', 'ak', 'al', 'am', 'an', 'ao', 'ap',
        'aq', 'ar', 'as', 'at', 'au', 'av', 'aw', 'ax', 'ay',
        'az', 'ba'
    ];
    var len = (collection.length % 2 === 0) ? collection.length : collection.length + 1;
    var upperMedian = Number(collection[len / 2 - 1]);
    var lowerMedian = Number(collection[collection.length - len / 2]);
    var median = Math.round((upperMedian + lowerMedian) / 2);
    return stra[median];
}

module.exports = median_to_letter;