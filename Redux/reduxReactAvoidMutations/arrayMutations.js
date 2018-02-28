const addCounter = (list) => {    
    //list.push mutates array
    //list.concat(0);
    return [...list, 0];
    
}

const removeCounter = (list, index) => {
    //list.splice(index, 1) mutates array
    /** 
     return list
        .slice(0, index)
        .concat(list.slice(index) + 1); 
     
    */    

    return [
        ...list.slice(0, index),
        ...list.slice(index + 1)
    ]
}

const incrementCounter = (list, index) => {
    // list[index]++ mutates   
    //take the array before the index
    //contact it with the new value
    //concat it with the rest of the original array 
    /**
     const newList = list
        .slice(0, index)
        .concat([list[index]+ 1])
        .concat(list.slice(index + 1));    
     */

    const newList = [
        ...list.slice(0, index),
        list[index] + 1,
        ...list.slice(index + 1)
    ]        
    return newList;
}

const testAddCounter = () => {
    const listBefore = [];
    const listAfter = [0];

    deepFreeze(listBefore);

    expect(
        addCounter(listBefore)
    ).toEqual(listAfter);
}

const testRemoveCounter = () => {
    const listBefore = [0, 10, 20];
    const listAfter = [0, 20];

    deepFreeze(listBefore);

    expect(
        removeCounter(listBefore, 1)
    ).toEqual(listAfter);
}

const testIncrementCounter = () => {
    const listBefore = [0, 10, 20];
    const listAfter = [0, 11, 20];

    deepFreeze(listBefore);

    expect(
        incrementCounter(listBefore, 1)
    ).toEqual(listAfter);
}
testAddCounter();
testRemoveCounter();
testIncrementCounter();
console.log('All tests passed');