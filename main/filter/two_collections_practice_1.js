'use strict';

function choose_common_elements(collection_a, collection_b) {

    //在这里写入代码

    return collection_a.filter(
        function(item) {
            console.log(item);
            if (collection_b.indexOf(item) != -1) {
                // console.log('yes'); 
                return item;
            }
        }
    );
}

module.exports = choose_common_elements;