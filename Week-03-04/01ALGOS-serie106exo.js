 let animals = [
    {specie: "chicken", legs: 2},
    {specie: "cow", legs: 4},
    {specie: "pig", legs: 4},
];

console.log();



 function numOfLegs(a, b, c) {
  let mult = [a, b, c]

  let totalnum = []
  for (let i = 0; i < animals.length; i++) {
    totalnum.push(mult[i] * animals[i].legs);
}

console.log(totalnum.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0,
  )
  );

 }

 numOfLegs(2, 3, 5)
 numOfLegs(1, 2, 3)
 numOfLegs(5, 2, 8)