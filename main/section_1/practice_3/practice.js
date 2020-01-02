function collect_same_elements(collection_a, object_b) {
    return collection_a.filter(item => collection_b.value.includes(item));
    //TODO: 这里不需要独立定义一个function，直接inline就好
}

module.exports = collect_same_elements;