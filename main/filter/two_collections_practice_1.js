'use strict';

function choose_common_elements(collection_a, collection_b) {
    return collection_a.filter(
            function(item) {
                if (collection_b.indexOf(item) !== -1) { //TODO: 两个等号？
                    return item;
                }
            }
        )
        // return commonElements; //TODO: 这里变量直接inline
}

module.exports = choose_common_elements;