// Method One

const checkTrinagleTypeOne = (a,b,c) => {
    if(a === b && b === c) return 'equilateral'
    if(a === b || b === c || a === c) return 'isoceles'
    if(a !== b && b !== c) return 'scalene'
}

console.log(checkTrinagleTypeOne(3,3,3));
console.log(checkTrinagleTypeOne(3,4,3));
console.log(checkTrinagleTypeOne(5,8,6));

// Method Two

const checkTrinagleTypeTwo = (a,b,c) => {
    let uniqueSide = new Set([a,b,c]).size

    if(uniqueSide === 1) return 'equilateral'
    if(uniqueSide === 2) return 'isoceles'
    return 'scalene'
}

console.log(checkTrinagleTypeTwo(3,3,3));
console.log(checkTrinagleTypeTwo(3,4,3));
console.log(checkTrinagleTypeTwo(5,8,6));
