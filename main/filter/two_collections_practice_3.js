'use strict';

function choose_divisible_integer(collection_a, collection_b) {

    //在这里写入代码
    var res = [];
    var ress = collection_a.filter(
        function(item) {
            var i;
            for (i in collection_b) {
                if (item % collection_b[i] === 0) {
                    res.push(item);
                    break;
                }
            }
            return res;
        }
    );
    return res;
}

module.exports = choose_divisible_integer;