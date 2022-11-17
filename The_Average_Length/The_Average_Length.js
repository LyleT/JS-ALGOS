/* Given an array of strings of the same letter type. Return a new array, which will differ in that the length of each element is equal to the average length of the elements of the previous array.

A few examples:

['u', 'y'] =>  ['u', 'y'] // average length is 1
['aa', 'bbb', 'cccc'] => ['aaa', 'bbb', 'ccc'] // average length is 3
['aa', 'bb', 'ddd', 'eee'] => ['aaa', 'bbb', 'ddd', 'eee'] // average length is 2.5 round up to 3
If the average length is not an integer, use Math.round().
The input array's length > 1 */

const averageLength = (arr) => {
  
    let avg = Math.round(arr.reduce((a,c) => a + Number(c.length),0) / arr.length);

    return arr.map( e => e[0].repeat(avg));

}


console.log(averageLength(['u', 'y'])); //returns average length 1
console.log(averageLength(['aa', 'bbb', 'cccc'])); //returns average length 3
console.log(averageLength(['aa', 'bb', 'ddd', 'eee'])); //returns average length 3