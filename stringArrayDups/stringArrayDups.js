/*
In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

For example:

dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

dup(["kelless","keenness"]) = ["keles","kenes"].

Strings will be lowercase only, no spaces. See test cases for more examples.
*/


const strArrDups = (arr) => {

    return arr.map( e => e.split('').filter( (w, i, a) => w !== a[i-1]).join(''));

}

console.log(strArrDups(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"])); // ['codewars','picaniny','hubububo']
console.log(strArrDups(["abracadabra","allottee","assessee"])); // ['abracadabra','alote','asese']
console.log(strArrDups(["kelless","keenness"])); // ['keles','kenes']
console.log(strArrDups(["Woolloomooloo","flooddoorroommoonlighters","chuchchi"])); // ['Wolomolo','flodoromonlighters','chuchchi']
console.log(strArrDups(["adanac","soonness","toolless","ppellee"])) // ['adanac','sones','toles','pele']
console.log(strArrDups(["callalloo","feelless","heelless"])); // ['calalo','feles','heles']
console.log(strArrDups(["putteellinen","keenness"])); //['putelinen','kenes']
console.log(strArrDups(["kelless","voorraaddoosspullen","achcha"])); // ['keles','voradospulen','achcha']
