// Method One

const average = (arr) => {
    let sum = arr.reduce((acc,item) => (
        acc + item 
    ), 0)
    return sum/arr.length
}

console.log(average([1,5,3,9,2]));
console.log(average([1,4,5,1,2]));
console.log(average([1,0,7,7,2]));
