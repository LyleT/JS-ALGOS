// Are the inputed words anagrams?

const isAnagram = (word1, word2) => {

  if (word1.length !== word2.length) return false;

  return word1.split('')
              .map( e => word2.includes(e))
              .every( e => e === true );
}



console.log(isAnagram("part", "trap"));
console.log(isAnagram("cinema", "iceman"));

