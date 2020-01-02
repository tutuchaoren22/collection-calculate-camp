'use strict';

function choose_divisible_integer(collection_a, collection_b) {
    return collection_a.filter(
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
    //return divisibleElements; //TODO: 这里变量直接inline
}
module.exports = choose_divisible_integer;