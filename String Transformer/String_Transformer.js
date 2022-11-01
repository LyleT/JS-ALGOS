function stringTransformer(str) {
    
// Take in a string, reverse the words, and switch the case.


    return str.split(' ')
            .reverse()
            .join(' ')
            .split('')
            .map( l => l === l.toUpperCase() ? l.toLowerCase() : l.toUpperCase())
            .join(' ');
}

console.log(stringTransformer('Example string')); // 'STRING eXAMPLE'

