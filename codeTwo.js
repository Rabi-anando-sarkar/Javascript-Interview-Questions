// Method One

const hashTagGeneratorOne = (str) => {
    if(str.length > 280 || str.length === 0) {
        return false
    }
    let wordStr = str.split(' ')
    let hashed = wordStr.map((curEl) => (curEl.replace(curEl[0], curEl[0].toUpperCase())))
    
    return `#${hashed.join('')}`
}

console.log(hashTagGeneratorOne('best car ever'));

// Method Two 

const hashTagGeneratorTwo = (str) => {
    if(str.length > 280 || str.length === 0) {
        return false
    }
    let wordStr = str.split(' ')
    let hashed = wordStr.map((word) => (word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()))
    return `#${hashed.join('')}`
}

console.log(hashTagGeneratorTwo('best car ever'));