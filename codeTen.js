// Method One

const arraysAreEqualOne = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return false

    for(let i=0; i<arr1.length; i++) {
        if(arr1[i] !== arr2[i]) return false
    }

    return true
}

console.log(arraysAreEqualOne([1,2,3],[1,2,3]));
console.log(arraysAreEqualOne([1,2,3],[1,4,3]));
console.log(arraysAreEqualOne([1,2,3],[1,4]));
console.log(arraysAreEqualOne([],[]));

// Method Two

const arraysAreEqualTwo = (arr1,arr2) => {
    if (arr1.length !== arr2.length) return false

    return arr1.every((curVal, index) => curVal === arr2[index])
}

console.log(arraysAreEqualTwo([1,2,3],[1,2,3]));
console.log(arraysAreEqualTwo([1,2,3],[1,4,3]));
console.log(arraysAreEqualTwo([1,2,3],[1,4]));
console.log(arraysAreEqualTwo([],[]));




