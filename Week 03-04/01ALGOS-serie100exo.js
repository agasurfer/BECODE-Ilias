function myFunction(a, b) {
  if (a === 10 || b === 10) {
    return true
  } else if (a + b === 10) {
    return true
  } else {
    return false
  }
};

console.log(myFunction(1, 9));

