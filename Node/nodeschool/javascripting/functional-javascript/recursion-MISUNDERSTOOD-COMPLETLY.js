function reduce(arr, fn, initial) {
    //IIFE function with initial values ( 0 and initial parameter value)
    return (function reduceOne(index, value) {
        if (index > arr.length - 1) {
            return value;
        }
        let nextIndex = index + 1
        return reduceOne(nextIndex, fn(value, arr[index], index, arr));
    })(0, initial)
}

module.exports = reduce;