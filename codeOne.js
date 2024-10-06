// Method One

const longestStringOne = (str) => {
    if(str.length = 0) return false
    let wordArray = str.split(" ");
    let longestWord = ''
    for (const s of wordArray) {
        if(s.length > longestWord.length) {
            longestWord = s
        }
    }
    return longestWord
}

console.log(longestStringOne('Rabi, is amazing and fantastic.'));

// Method Two

const longestStringTwo = (str) => {
    if(str.length = 0) return false
    let wordArray = str.split(' ')
    wordArray.sort((a,b) => a.length - b.length)
    return wordArray.at(-1)
}

console.log(longestStringTwo('Rabi, is amazing and fantastic.'));

// Method Three 

const longestStringThree = (str) => {
    if(str.length = 0) return false
    let wordArray = str.split(' ')
    let longestWord =  wordArray.reduce((accum,curVal) => curVal.length > accum.length ? curVal : accum ,'')
    return longestWord
}

console.log(longestStringThree('Rabi, is amazing and fantastic.'));