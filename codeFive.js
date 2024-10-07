// Method One

const sortAscendingOne = (arrNum) => {
    let sorted = arrNum.sort((a,b) => a-b)
    return sorted
}

console.log(sortAscendingOne([5,3,1,6,4,2]));

// Method Two

const sortAscendingTwo = (arrNum) => {
    for(let i=0; i<arrNum.length-1 ;i++) {
        for(let j=0; j < arrNum.length - i - 1;j++) {
            if(arrNum[j] > arrNum[j+1]) {
                let temp = arrNum[j]
                arrNum[j] = arrNum[j+1]
                arrNum[j+1] = temp
            }
        }
    }
    return arrNum
}

console.log(sortAscendingTwo([5,3,1,6,4,2]));