// Find the longest word in a sentence

const longestWord = (text) => {
    var sortedArray = text.split(' ')
                          .sort((wordA, wordB) => wordB.length - wordA.length)
    return sortedArray[0]
}

