function countWords(arr) {
    //Reduce will provide one accumulattor that we can use to accumulate the count values
    // we need to provide reduce one secound argument, so that accumulator is initialized with one empty object    
    return arr.reduce(function(accumulator, currentValue) {
        accumulator[currentValue] = ++accumulator[currentValue] || 1;
        return accumulator
    }, {}) 
}

module.exports = countWords