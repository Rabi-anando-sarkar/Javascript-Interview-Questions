// Method One

const sumOfDigitsOne = (num) => {
    let arr = Array.from(String(num), Number)
    return arr.reduce((acc,curVal) => curVal + acc,0)
}

console.log(sumOfDigitsOne(12345));
console.log(sumOfDigitsOne(345));
console.log(sumOfDigitsOne(125));

// Method Two

const sumOfDigitsTwo = (num) => {
    let sum = 0

    while(num > 0) {
        const digit = num%10;
        sum += digit
        num = Math.floor(num/10)
    }

    return sum
}

console.log(sumOfDigitsTwo(12345));
console.log(sumOfDigitsTwo(345));
console.log(sumOfDigitsTwo(125));