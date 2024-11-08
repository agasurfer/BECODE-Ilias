function sortIt(array) {
  console.log(array.sort());
}

sortIt([4, 1, 3]);
sortIt([[4], [1], [3]]);
sortIt([4, [1], 3]);
sortIt([[4], 1, [3]]);
sortIt([[3], 4, [2], [5], 1, 6]);