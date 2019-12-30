'use strict';

function choose_divisible_integer(collection_a, collection_b) {

    //在这里写入代码
    var ress = collection_a.filter(
        function(item) {
            var i;
            for (i in collection_b) {
                if (item % collection_b[i] === 0) {
                    return item;
                    break;
                }
            }
        }
    );
    return ress;
}
module.exports = choose_divisible_integer;