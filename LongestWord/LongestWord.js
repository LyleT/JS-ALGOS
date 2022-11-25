// Given a sentence, return the largest word.

const longestWord = (text) => {

const textArr = text.split(" ");
const wordLength = textArr.map( e => e.length );
const maxWord = Math.max(...wordLength);
return textArr[wordLength.indexOf(maxWord)];

}

console.log(longestWord("Top Shelf Web Development Training on Scotch"));