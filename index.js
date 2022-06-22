const standardizedInput = function(collection){
    return (collection instanceof Array) ? collection.slice() : Object.values(collection)
}

const myEach = function(collection, callback){
    const newCollection = standardizedInput(collection);
    
    for(let i = 0; i < newCollection.length; i++){
        callback(newCollection[i])
    }
    return collection
}

function myMap(collection, callback) {
    let modifiedArray = []
    for (let accessor in collection) {
        modifiedArray.push(callback(collection[accessor]))
    }
    return modifiedArray
}

function myReduce(collection, callback, acc) {
    let copy = [...collection]
    acc = acc || copy.shift()
    for (let accessor in copy) {
        acc = callback(acc, copy[accessor], copy)
    }
    return acc
}
function myFind(collection, predicate) {
    for (let accessor in collection) {
        let element = collection[accessor]
        if (predicate(element)) {
            return element
        }
    }
}
function myFilter(collection, predicate) {
    let selectedArray = []
    for (let accessor in collection) {
        let element = collection[accessor]
        if (predicate(element)) {
            selectedArray.push(element)
        }
    }
    return selectedArray
}
function mySize(collection) {
    return Object.keys(collection).length
}
function myFirst(collection, n = 1) {
    let count = 1
    let array = []
    for (let accessor in collection) {
        if (count <= n) {
            array.push(collection[accessor]);
            count++
        }
    }
    return array.length > 1 ? array : array[0]
}
function myLast(collection, n = 1) {
    let startingIndex = collection.length - n;
    return n > 1 ? collection.slice(startingIndex, collection.length) : collection[startingIndex]
}
function myKeys (object) {
}
function myValues(object) {
    
}
