'use strict';

function choose_common_elements(collection_a, collection_b) {

    //在这里写入代码
    var commonElements = collection_a.filter(
        function(item) {
            if (collection_b.indexOf(item) != -1) {
                return item;
            }
        }
    );
    return commonElements;

}

module.exports = choose_common_elements;