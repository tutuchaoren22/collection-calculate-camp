'use strict';

function get_union(collection_a, collection_b) {
    //在这里写入代码
    var res = collection_a.concat(
        collection_b.filter(
            function(v) {
                return collection_a.indexOf(v) === -1
            })
    );

    return res;
}

module.exports = get_union;