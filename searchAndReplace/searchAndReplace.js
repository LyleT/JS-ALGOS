// Given a sentence, replace a given word in a sentence with another word. 
// If the word to be replaced is capitalized, then capitalize to new word.

const searchAndReplace = (str, word, replace) => {

   word[0].toUpperCase() === word[0] ? (replace = replace[0].toUpperCase() + replace.slice(1)) : null;

   return str.replace(word, replace);

}




console.log(searchAndReplace("He is Sleeping on the couch", "Sleeping", "sitting"));