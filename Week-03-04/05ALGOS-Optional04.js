
let average = (...nums)=> nums.reduce((accumulator, currentValue)=> accumulator + currentValue, 0) / nums.length

console.log(average(1, 2, 3, 4));
// Result: 2.5

