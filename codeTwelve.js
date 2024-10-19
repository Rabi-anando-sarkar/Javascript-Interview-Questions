// Method One

const removeDuplicatesOne = (arr) => {
    let num = new Set(arr)
    return Array.from(num)
}

console.log(removeDuplicatesOne([1,2,3,4,5,2,1]));
console.log(removeDuplicatesOne([3,4,5,5,5,5,5]));
console.log(removeDuplicatesOne([1,2,2,1]));

// Method Two

const removeDuplicatesTwo = (arr) => {
    let num = new Set(arr)
    return [...num]
}

console.log(removeDuplicatesTwo([1,2,3,4,5,2,1]));
console.log(removeDuplicatesTwo([3,4,5,5,5,5,5]));
console.log(removeDuplicatesTwo([1,2,2,1]));
