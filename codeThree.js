// Method One

const countCharOne = (str,rep) => {
    let newStr = str.split('')
    let count = 0
    for(i of newStr) {
        if(i === rep)
            count++
    }
    return count
}

console.log(countCharOne('Rabi super hero','U'));

// Method Two

const countCharTwo = (str,rep) => {
    let count = 0
    for(let i=0; i<=str.length;i++) {
        if(str.charAt(i) === rep) {
            count++
        }
    }
    return count
}

console.log(countCharTwo('Rabi super hero','u'));

// Method Three

const countCharThree = (str,rep) => {
    let newStr = str.toUpperCase().split('')
    return newStr.reduce((acc,val) => val === rep ? acc + 1 : acc,0)
}

console.log(countCharThree('Rabi super hero','R'));