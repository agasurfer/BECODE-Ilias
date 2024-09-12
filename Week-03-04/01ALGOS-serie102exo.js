function addUp(a) {
 if (a >=1 && a <= 1000 ) {
    let myArray = []
    
    for (let i = 0; i < a; i++) {
       myArray.push(i + 1) 
       
    } const final = myArray.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0,)
      return console.log(final);
      
  }
};

addUp(4);
addUp(13);
addUp(600);