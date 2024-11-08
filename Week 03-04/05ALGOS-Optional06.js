


let areEqual = (a, b) => a.length == b.length && a.every((element) => b.includes(element));


console.log(areEqual([1, 2, 3, 4], [3, 1, 4, 2]));
// Result : true

console.log(areEqual([1, 2, 3, 4], [1, 2, 3]));
// Result : false

console.log(areEqual([1, 2, 2], [1, 2]));