/* "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

--> "alpha beta gamma delta alpha beta gamma delta"  */


const removeConsecutiveDuplicates = (str) => {

    return str.split(' ').filter( (w, i, a) => w != a[i-1]).join(' ');

}

console.log(removeConsecutiveDuplicates("alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta")); 


// removeConsecutiveDuplicates("alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"), 'alpha beta gamma delta alpha beta gamma delta');