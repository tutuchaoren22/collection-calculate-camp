function collect_same_elements(collection_a, collection_b) {
    //在这里写入代码
    return collection_b[0].filter(item => collection_a.includes(item))
}

module.exports = collect_same_elements;