function map(array, func){
    let mappedArray = [];
    array.forEach(number => {
        mappedArray.push(func(number))
    });
    return mappedArray;
}

function reduce(array, func, startingPoint){
    let accumulator;
    let index;

    if(!!startingPoint){
        accumulator = startingPoint;
        index = 0;
    } else {
        accumulator = func(array[0],array[1]);
        index = 2;
    }
    for(index; index< array.length; index++){
        accumulator = func(accumulator, array[index])
    }
    return accumulator;
}