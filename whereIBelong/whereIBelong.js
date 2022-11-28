/* Return the lowest index at which a value should be inserted into an array once it has been sorted.
The return value should be a number */

const whereIBelong = (arr, num) => {

    // let result = [...arr];

    // result.push(num);

    // result.sort( (a, b) => a - b );

    // return result.indexOf(num);

    // Refactored to a more consise and clean way:

    return [...arr, num].sort( (a, b) => a - b ).indexOf(num);
}


console.log(whereIBelong([1, 2, 3, 4], 1.5));