// Method One

const isPalindromeOne = (str) => {
    if(str.length === 0) return false

    str.toLowerCase().replace(/\W/g, '')

    let arrStr = str.split('').reverse().join('')
    return str === arrStr ? true : false
}

console.log(isPalindromeOne('racecar'));
console.log(isPalindromeOne('naman'));
console.log(isPalindromeOne('heroman'));

// Method Two

const isPalindromeTwo = (str) => {
    if(str.length === 0) return false

    let start = 0
    let end = str.length-1

    while (start < end) {
        if(str[start] !== str[end]) {
            return false
        }
        start++
        end--
    }

    return true
}

console.log(isPalindromeTwo('racecar'));
console.log(isPalindromeTwo('naman'));
console.log(isPalindromeTwo('heroman'));

