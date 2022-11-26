/* Translate a provided string into piglatin
 for words that begin with consonant sounds, the consonant before the initial
 vowel should be moved to the end of the word sentence and affixed.  "pig " = "igpay"

 for words 
*/

const pigLatin = (str) => {

    return str.split(' ')
              .map( e => 
              e.replace(/^([aeiouy])(.*)/, '$1$2way')
              .replace(/^([^aeiouy]+)(.*)/, '$2$1ay'))
              .join(' ');
}

console.log(pigLatin("The quick brown fox jumps over the lazy dog"));