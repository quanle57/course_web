module.exports = {
    multipleModels: function(array) {
        return array.map(array => array.toJSON());
    },
    singleModel: function(array) {
        return array ? array.toJSON() : array;
    },
}