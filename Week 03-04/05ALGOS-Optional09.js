
let onlyPositives = (array)=> array.filter((element)=> element > 0).reduce((accumulator, currentValue) => accumulator + currentValue, 0)



console.log(onlyPositives([1, 6, 2, -3, 5, -12]));
// Result : 14

console.log(onlyPositives([-3, -4, -2]));
// Result : 0