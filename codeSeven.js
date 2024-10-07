// Method One

const findMaxOne = (arrNum) => {
    if(arrNum.length === 0) return 'Empty Array'

    let sorted = arrNum.sort((a,b) => b - a)
    return sorted[0]
}

console.log(findMaxOne([1,5,3,9,2]));
console.log(findMaxOne([-10, -5, -3 ,-4, 0]));
console.log(findMaxOne([5]));
console.log(findMaxOne([]));

// Method Two

const findMaxTwo = (arrNum) => {
    if(arrNum.length === 0) return 'Empty Array'
    let largest = Math.max(...arrNum)
    return largest
}

console.log(findMaxTwo([1,5,3,9,2]));
console.log(findMaxTwo([-10, -5, -3 ,-4, 0]));
console.log(findMaxTwo([5]));
console.log(findMaxTwo([]));