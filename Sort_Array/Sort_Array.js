function sortArray(array){

    const oddNums = array.filter( n => n %2 !== 0).sort((a, b) => b - a );

    return array.map(n => n %2 === 0 ? n : oddNums.pop());
}


console.log(sortArray([5, 3, 2, 8, 1, 4])); // returns [1, 3, 2, 8, 5, 4]
console.log(sortArray([5, 3, 1, 8, 0])); // returns [1, 3, 5, 8, 0]

