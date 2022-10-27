const duplicateEncode = (word) => {
    return word
    .toLowerCase()
    .split("")
    .map( (item, index, word) => word.indexOf(item) === word.lastIndexOf(item) ? "(" : ")")
    .join("");
}


console.log(duplicateEncode("din")); // "(((");
console.log(duplicateEncode("recede")); // "()()()");
console.log(duplicateEncode("Success")); // ")())())","should ignore case");
console.log(duplicateEncode("(( @")); // "))((";
